import { Router } from "express";
import { createRooms, deleteRoomsId, getRooms, getRoomsId, updateRooms } from "../controllers/rooms.controller.js";


const router = Router()

//----------------------------------- RUTAS DE ROOMS-------------------------------------
router.get('/rooms', getRooms)
router.get('/rooms/:id', getRoomsId)

//Agregar
router.post('/rooms', createRooms)

//Actualizar
router.patch('/rooms/:id', updateRooms)

//Eliminar
router.delete('/rooms/:id', deleteRoomsId)

export default router;