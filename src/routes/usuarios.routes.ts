import { Router } from "express";
import { getAllUsuarios } from "../controllers/usuarios.controller.ts";


const router = Router();

// Endpoint GET: /usuarios/all 
router.get("/consultorio", getAllUsuarios);  
export default router;
