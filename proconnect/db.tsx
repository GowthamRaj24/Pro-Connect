import mongoose from 'mongoose';
const url = process.env.DB_CONNECT || '';

const connect = async () => {
    try {
        await mongoose.connect(url);
        console.log('Connected to the database');
    } catch (err) {
        console.log('Error connecting to the database', err);
    }
};
export default connect;

