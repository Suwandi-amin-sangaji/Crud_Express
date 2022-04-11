import express from "express";

// import routes yang ada di folder routes
import {getUsers, createUsers, getUser, deleteUser, updateUser} from "../controllers/users.js";

const router = express.Router();

// get
router.get("/users", getUsers);
// tambah data
router.post("/users", createUsers);
// tampil data
router.get("/user/:id", getUser);
// delete data
router.delete("/user/:id", deleteUser);
// update data
router.put("/user/:id", updateUser);

// export router
export default router;