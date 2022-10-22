import { pool } from "../db.js";
export const getUsers = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM user");
        res.json(rows);
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }
}

export const getUsersById = async(req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("SELECT * FROM user WHERE id = ?", [
          id,
        ]);
    
        if (rows.length <= 0) {
          return res.status(404).json({ message: "user not found" });
        }
    
        res.json(rows[0]);
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }
}

export const createUser =async(req,res)=>{
    try {
        const { name, age } = req.body;
        const [rows] = await pool.query(
          "INSERT INTO user (name, age) VALUES (?, ?)",
          [name, age]
        );
        res.status(201).json({ id: rows.insertId, name, age });
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }
}
export const updateUser = async(req,res)=>{
    try {
        const { id } = req.params;
        const { name, age } = req.body;
    
        const [result] = await pool.query(
          "UPDATE user SET name = IFNULL(?, name), age = IFNULL(?, age) WHERE id = ?",
          [name, age, id]
        );
    
        if (result.affectedRows === 0)
          return res.status(404).json({ message: "user not found" });
    
        const [rows] = await pool.query("SELECT * FROM user WHERE id = ?", [
          id,
        ]);
    
        res.json(rows[0]);
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }
}
export const deleteUser= async(req, res) =>{
    try {
        const { id } = req.params;
        const [rows] = await pool.query("DELETE FROM user WHERE id = ?", [id]);
    
        if (rows.affectedRows <= 0) {
          return res.status(404).json({ message: "Employee not found" });
        }
    
        res.sendStatus(204);
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }
}