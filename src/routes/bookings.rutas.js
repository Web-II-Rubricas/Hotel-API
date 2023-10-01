import { Router } from "express";
import { createBookings, deleteBookingsId, getBookings, getBookingsId, updateBookings } from "../controllers/bookings.controller.js";


const router = Router()

//----------------------------------- RUTAS DE BOOKINGS-------------------------------------
//Cosultar
router.get('/bookings', getBookings)
router.get('/bookings/:codigo', getBookingsId)

//Agregar
router.post('/bookings', createBookings)

//Actualizar
router.patch('/bookings/:codigo', updateBookings)

//Eliminar
router.delete('/bookings/:codigo', deleteBookingsId)

export default router;