import { Router } from "express"

const router = Router()

// Importing the controllers
import * as authCtrl from "../controllers/auth.controller"

// Import middleware
import { verifySignup } from "../middlewares"

router.post('/signup', [
    verifySignup.checkDuplicateUsernameOrEmail,
    verifySignup.checkExistingRoles
], authCtrl.singUp)
router.post('/signin', authCtrl.singIn)

export default router