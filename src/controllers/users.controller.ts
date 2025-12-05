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
    data : result .rows[0]
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



export const usersController = {
        createUser,
        getUser
}