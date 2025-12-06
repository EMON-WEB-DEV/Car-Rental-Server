import { Request, Response } from "express";
import { usersService } from "../services/users.service";

const createUser = async (req : Request, res : Response) => {
  
  try {    
        const result = await usersService.userInitialData(req.body);  
 return res.status(201).json({
    success: true,
    massage : 'User registered successfully',
    data : result.rows[0]
  })

  }
  catch (error) {
       return res.status(500).json({
          success: false,
          message: 'Server Error',
          error: error
        });
  }
}

const getUser = async (req : Request, res : Response) => {
  
  try {    
        const result = await usersService.userGetData();  
 return res.status(201).json({
    success: true,
    massage : 'User get successfully',
    data : result .rows
  
  })

  }
  catch (error) {
       return res.status(500).json({
          success: false,
          message: 'Server Error',
          error: error
        });
  }
}

const putUserData = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string);
        const result = await usersService.putUserData(id, req.body);
        return res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: result.rows[0]
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error
        });
    }
}

const getUserById = async (req: Request, res: Response) => { try { const id = parseInt(req.params.id as string); const result = await usersService.getUserById(id); return res.status(200).json({ success: true, message: 'User updated successfully', data: result.rows[0] }); } catch (error) { return res.status(500).json({ success: false, message: 'Server Error', error: error }); } }

const deleteUserData = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string);
        const result = await usersService.deleteUserData(id);
        return res.status(200).json({
            success: true,
            message: 'User deleted successfully',
            data: result.rows[0]
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error
        });
    }
}

export const usersController = {
        createUser,
        getUser,
        getUserById,
        putUserData,
        deleteUserData
}