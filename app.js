require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const roleRoutes = require('./Routes/Role.routes.js');
const userRoutes = require('./Routes/User.routes');
const surveyRoutes = require('./Routes/Survey.routes');
const participationRoutes = require('./Routes/Participation.routes');
const questionRoutes = require('./Routes/Question.routes');
const responseRoutes = require('./Routes/Response.routes');
const certificateRoutes = require('./Routes/Certification.routes');
const authRoutes = require('./Routes/Auth.routes.js');
const { authenticateToken } = require('./middlewares/auth.middlewares.js');
const multer = require('multer');
const path = require('path');
const { fileURLToPath } = require('url');

const dirname = path.dirname(__filename)
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/certificados', express.static(path.join(__dirname, 'certificados')));
app.use('/imagenes', express.static(path.join(__dirname, 'imagenes')));
app.use(authRoutes);
app.use(userRoutes);
app.use(roleRoutes);
app.use(surveyRoutes);
app.use(participationRoutes);
app.use(questionRoutes);
app.use(responseRoutes);
app.use(certificateRoutes);


mongoose.connect(process.env.URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(error => {
        console.error('Database connection error:', error);
    });
