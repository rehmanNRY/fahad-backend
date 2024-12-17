import express, { Router } from "express";
import {
  requestCodeController,
  verifyCodeController,
  resetPasswordController,
} from "../../controllers/passwordResetController/passwordResetController.js";
import {
  validateUserEmail,
  validateCode,
  validatePassword,
} from "../../validations/passwordReset/passwordResetValidations.js";
import authenticateResetCode from "../../middlewares/authenticateResetCode/authenticateResetCode.js";

const router: Router = express.Router();

// router for request a code
router.post("/request-code", validateUserEmail(), requestCodeController);

// router for verify a code
router.post("/verify-code", authenticateResetCode, validateCode(), verifyCodeController);

// router for set new password
router.post("/new-password", authenticateResetCode, validatePassword(), resetPasswordController);

export default router;