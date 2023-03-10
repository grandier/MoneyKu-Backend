const express = require("express");
const router = express.Router();
const moneykuController = require("../controller/moneykuController");

router.post("/register", moneykuController.register);
router.post("/login", moneykuController.login);
router.post("/createWallet", moneykuController.createWallet);
router.post("/createDefaultWallet", moneykuController.createDefaultWallet);
router.post("/createIncomeCategory", moneykuController.createIncomeCategory);
router.post("/createExpenseCategory", moneykuController.createExpenseCategory);
router.post("/createIncome", moneykuController.createIncome);
router.post("/createExpense", moneykuController.createExpense);
router.get("/getIncome", moneykuController.getIncome);
router.get("/getExpense", moneykuController.getExpense);
router.get("/getAllTransaction", moneykuController.getAllTransaction);
router.get("/getRecentTransaction", moneykuController.getRecentTransaction);
router.get("/getWallet", moneykuController.getWallet);
router.get("/getTotalIncomeByWallet", moneykuController.getTotalIncomeByWallet);
router.get(
  "/getTotalExpenseByWallet",
  moneykuController.getTotalExpenseByWallet
);
router.get("/getIncomeByWallet", moneykuController.getIncomeByWallet);
router.get("/getExpenseByWallet", moneykuController.getExpenseByWallet);
router.get(
  "/getAllTransactionByWallet",
  moneykuController.getAllTransactionByWallet
);
router.get("/getAccountDetail", moneykuController.getAccountDetail);
router.get("/getCategory", moneykuController.getCategory);
router.get("/getTotalIncome", moneykuController.getTotalIncome);
router.get("/getTotalExpense", moneykuController.getTotalExpense);
router.delete("/deleteWallet", moneykuController.deleteWallet);

module.exports = router;
