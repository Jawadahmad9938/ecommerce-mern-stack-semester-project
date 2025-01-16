const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = 'your_jwt_secret_key';

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userAuth')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

    const UserSchema = new mongoose.Schema({
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
      });
      
      const User = mongoose.model('User', UserSchema);
      
      const authMiddleware = (req, res, next) => {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
          return res.status(401).json({ error: 'Unauthorized' });
        }
      
        try {
          const decoded = jwt.verify(token, JWT_SECRET);
          req.user = decoded;
          next();
        } catch (error) {
          res.status(401).json({ error: 'Invalid token' });
        }
      };
      
      // Signup route
      app.post('/signup', async (req, res) => {
        const { username, email, password } = req.body;
      
        try {
          const existingUser = await User.findOne({ email });
          if (existingUser) {
            return res.status(400).json({ error: 'Email already registered.' });
          }
      
          const hashedPassword = await bcrypt.hash(password, 10);
          const newUser = new User({ username, email, password: hashedPassword });
          await newUser.save();
      
          res.status(201).json({ message: 'Signup successful!', redirect: '/front.html' });
        } catch (error) {
          res.status(500).json({ error: 'Internal server error.' });
        }
      });
      
      // Login route
      app.post('/login', async (req, res) => {
        const { email, password } = req.body;
      
        try {
          const user = await User.findOne({ email });
          if (!user) {
            return res.status(400).json({ error: 'Invalid email or password!' });
          }
      
          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invalid email or password!' });
          }
      
          const token = jwt.sign({ id: user._id, username: user.username, email: user.email }, JWT_SECRET, {
            expiresIn: '1h',
          });
      
          res.json({ message: 'Login successful!', token, redirect: '/front.html' });
        } catch (error) {
          res.status(500).json({ error: 'Internal server error.' });
        }
      });      

// Route to automatically redirect root to front.html
app.get('/', (req, res) => {
    res.redirect('/front.html');
});

// Route to dynamically serve login and signup pages
app.get('/:page', (req, res) => {
    const page = req.params.page;
    const filePath = path.join(__dirname, 'public', `${page}.html`);
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('Page not found');
        }
    });
});


const OrderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    cnic: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });
  
  const Order = mongoose.model('Order', OrderSchema);

  
  app.post('/place-order', async (req, res) => {
    const { name, email, age, phone, address, cnic, paymentMethod } = req.body;
  
    try {
      const newOrder = new Order({ name, email, age, phone, address, cnic, paymentMethod });
      await newOrder.save();
      res.status(201).json({ message: 'Order placed successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to place order.' });
    }
  });
  

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
