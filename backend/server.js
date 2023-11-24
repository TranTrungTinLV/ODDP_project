const express = require('express'); //build serever
const mongoose = require('mongoose'); //connect db
const bodyParser = require('body-parser'); //test postman
const port = 3000;
const fs = require('fs'); //node js 
const app = express();

app.use(bodyParser.json());

//connect mongoDB
const dbConnect = async () => {
    const uri = "mongodb+srv://levi2002:M4MkKPMg34g0vK62@oodp.exnkrwo.mongodb.net/?retryWrites=true&w=majority";
    try {
        await mongoose.connect(uri)
        console.log("Db is Connected Successfully")
    } catch (error) {
        console.log(error.message)
    }
}
dbConnect();


//trigger
app.post('/trigger', async (req, res) => {
    // Logic xử lý sự kiện trigger
    console.log('Sự kiện trigger nhận được:', req.body);
    // Thực hiện hành động dựa trên sự kiện trigger
    res.status(200).send('Trigger đã được xử lý');
});

// Mô hình Schema cho Hợp Đồng
const FullContractSchema = new mongoose.Schema({
    contractCode: String,
    customerName: String,
    yearOfBirth: Number,
    ssn: String,
    address: String,
    orderCode: String,
    // Bạn có thể thêm các trường khác nếu cần
});

const FullContract = mongoose.model('FullContract', FullContractSchema); //create db 

module.exports = FullContract;
const OrderCounterSchema = new mongoose.Schema({
    date: String, // Lưu trữ ngày dưới dạng 'YYYYMMDD'
    count: Number, // Số lượng hợp đồng trong ngày
});

const OrderCounter = mongoose.model('OrderCounter', OrderCounterSchema);

async function generateOrderCode() {
    const today = new Date();
    const dateString = today.toISOString().split('T')[0].replace(/-/g, '');
    //return date-month-year 
    let counter = await OrderCounter.findOne({
        date: dateString
    });
    if (!counter) {
        counter = await OrderCounter.create({
            date: dateString,
            count: 0
        });
    }

    counter.count += 1;
    await counter.save();

    const sequentialNumber = String(counter.count).padStart(2, '000');
    const orderCode = `HD${dateString}${sequentialNumber}`;
    console.log(orderCode);
    return orderCode;
}
generateOrderCode();
const logNewContract = (contract) => {
    const logMessage = `New contract added at ${new Date().toISOString()}: ${JSON.stringify(contract)}\n`;
    fs.appendFile('contract_log.txt', logMessage, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
};



// This will listen for new documents in FullContract collection
const changeStream = FullContract.watch();

changeStream.on('change', (change) => {
    console.log(change);
    if (change.operationType === 'insert') {
        const contract = change.fullDocument;
        console.log('New contract added:', contract);
        logNewContract(contract); // Gọi hàm ghi nhật ký
    }
});

// Route to fetch all full contracts
app.get('/fullcontracts', async (req, res) => {
    try {
        const contracts = await FullContract.find();
        res.json(contracts);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Route to add a new full contract
app.post('/fullcontracts', async (req, res) => {
    try {
        const orderCode = await generateOrderCode();
        const newContract = new FullContract({
            ...req.body,
            orderCode 
        });
        await newContract.save();
        res.status(201).json(newContract);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${port}`));

//đã bán chưa bán status
//