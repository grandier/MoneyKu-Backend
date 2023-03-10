const moneykuService = require("../services/moneykuService");

async function register(req, res) {
  try {
    const result = await moneykuService.register(req.body);
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}

async function login(req, res) {
  try {
    const result = await moneykuService.login(req.body);
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}

async function createDefaultWallet(req, res) {
  try {
    const result = await moneykuService.createDefaultWallet(req.body);
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}
async function createWallet(req, res) {
  try {
    const result = await moneykuService.createWallet(req.body);
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}

async function createIncomeCategory(req, res) {
  try {
    const result = await moneykuService.createIncomeCategory(req.body);
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}

async function createExpenseCategory(req, res) {
  try {
    const result = await moneykuService.createExpenseCategory(req.body);
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}

async function createIncome(req, res) {
  try {
    const result = await moneykuService.createIncome(req.body);
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}

async function createExpense(req, res) {
  try {
    const result = await moneykuService.createExpense(req.body);
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}

async function getIncome(req, res) {
  try {
    const result = await moneykuService.getIncome(req.query);
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}

async function getExpense(req, res) {
  try {
    const result = await moneykuService.getExpense(req.query);
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}

async function getAllTransaction(req, res) {
  try {
    const result = await moneykuService.getAllTransaction(req.query);
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}

async function getWallet(req, res) {
  try {
    const result = await moneykuService.getWallet(req.query);
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}

async function getIncomeByWallet(req, res) {
  try {
    const result = await moneykuService.getIncomeByWallet(req.query);
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}

async function getExpenseByWallet(req, res) {
  try {
    const result = await moneykuService.getExpenseByWallet(req.query);
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}
async function getTotalIncomeByWallet(req, res) {
  try {
    const result = await moneykuService.getTotalIncomeByWallet(req.query);
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}

async function getTotalExpenseByWallet(req, res) {
  try {
    const result = await moneykuService.getTotalExpenseByWallet(req.query);
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}

async function getAllTransactionByWallet(req, res) {
  try {
    const result = await moneykuService.getAllTransactionByWallet(req.query);
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}

async function getRecentTransaction(req, res) {
  try {
    const result = await moneykuService.getRecentTransaction(req.query.idUser);
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}

async function getAccountDetail(req, res) {
  try {
    const result = await moneykuService.getAccountDetail(req.query.idUser);
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}

async function getCategory(req, res) {
  try {
    const result = await moneykuService.getCategory();
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}
async function getTotalIncome(req, res) {
  try {
    const result = await moneykuService.getTotalIncome(req.query);
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}
async function getTotalExpense(req, res) {
  try {
    const result = await moneykuService.getTotalExpense(req.query);
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}

async function deleteWallet(req, res) {
  try {
    const result = await moneykuService.deleteWallet(req.query);
    res.json(result);
  } catch (err) {
    res.json(err.detail);
  }
}

module.exports = {
  register,
  login,
  createWallet,
  createDefaultWallet,
  createIncomeCategory,
  createExpenseCategory,
  createIncome,
  createExpense,
  getIncome,
  getExpense,
  getAllTransaction,
  getRecentTransaction,
  getWallet,
  getIncomeByWallet,
  getExpenseByWallet,
  getAllTransactionByWallet,
  getTotalExpenseByWallet,
  getTotalIncomeByWallet,
  getAccountDetail,
  getCategory,
  getTotalIncome,
  getTotalExpense,
  deleteWallet,
};
