import { Router } from "express";
import *as controller from '../controllers/controllers.js'
const router=Router();
router.route('/questions')
.get(controller.getqestions)
.delete(controller.dropqestions)
.post(controller.insertqestions)

router.route('/result')
.get(controller.getresult)
.delete(controller.dropresult)
.post(controller.storeresult)
export default router
