const User = require("../models/usermodel")

/**
 * AddUser API
 */
const addUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;

        // Checking empty fields
        if (!name || !email || !age) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            })
        }

        // Duplicate email checking
        const existingUser = await User.findOne({ email });

        if(existingUser) {
            return res.status(400).json({
                success : false,
                message : "Email already exists"
            })
        }

        const user = await User.create({
            name,
            email,
            age,
        });

        res.status(201).json({
            success: true,
            message: "User added successfully",
            data: user,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: " Invalid user"
        })
    }

}


/**
 * Fetch User
 */
const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({
            success: true,
            count: users.length,
            message: "Users fetched successfully",
            data: users,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: " Invalid user"
        })
    }
}



/**
 * Delete User
 */
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not Found!!"
            });
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "User not found!!",
        })
    }
}

module.exports = {
    addUser,
    getUsers,
    deleteUser,
}