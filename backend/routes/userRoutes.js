import express from "express";
import { createUser , loginUser,logoutCurrentUser} from "../controllers/userController.js";
import { getAllUsers,getCurrentUserProfile,updateCurrentUserProfile,deleteUserById , getUserById,updateUserById} from "../controllers/userController.js";
import {authenticate, authorizeAdmin} from '../middleware/authMiddleware.js'

const router = express.Router()

router.route("/").post(createUser).get(authenticate, authorizeAdmin, getAllUsers)
http://localhost:5000/api/users/auth
router.post('/auth',loginUser);
router.post('/logout',logoutCurrentUser);

router
    .route('/profile')
    .get(authenticate, getCurrentUserProfile)
    .put(authenticate, updateCurrentUserProfile);

router
    .route('/:id')
    .delete(authenticate, authorizeAdmin, deleteUserById)
    .get(authenticate,authorizeAdmin, getUserById)
    .put(authenticate,authorizeAdmin,updateUserById)
    

export default router;