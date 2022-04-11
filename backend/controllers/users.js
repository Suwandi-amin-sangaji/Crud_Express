// import uuid
import {v4 as uuid} from "uuid";


// membuat array kosong untuk meanmpung data
let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

// Tambah Data
export const createUsers = (req, res) => {
    const user = req.body;
    users.push({...user, id: uuid()});
    res.send("berhasil menambahkan user");
}

// Tampil Data
export const getUser = (req, res) => {
    const singleUser = users.filter((user) => user.id === req.params.id);
    res.send(singleUser);
}

// Delete data
export const deleteUser = (req, res) => {
    const user = users.filter((user) => user.id !== req.params.id);
    users = user;
    res.send("berhasil menghapus user");
}

// update Data
export const updateUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id);
    const {name, email, contact} = req.body;
    user.name = name;
    user.email = email;
    user.contact = contact;
    res.send("berhasil mengupdate user");
}