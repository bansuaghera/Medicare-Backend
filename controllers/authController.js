exports.login = async (req, res) => {

  const { email, password } = req.body;

  // Demo login (replace with DB logic)
  if (email === "admin@gmail.com" && password === "123456") {
    return res.json({
      message: "Login Success",
      role: "admin"
    });
  }

  return res.status(401).json({
    message: "Invalid Credentials"
  });
};