import { Router } from "express";
import *as controller from '../controllers/controllers.js'
const router=Router();
router.route('/questions')
.get(controller.getqestions)
.post(controller.insertqestions)
.put(controller.updatequestion)

router.route('/result')
.get(controller.getresult)
.delete(controller.dropresult)
.post(controller.storeresult)
router.route('/cover')
.get(controller.getcover)
.post(controller.insertcover)
.put(controller.updatecover)
router.route('/cover/:id')
.delete(controller.delcover)
router.route('/questions/:id')
.get(controller.getqestionsBYID)

router.route('/questions/:idcover/:id')
.delete(controller.delquestion)

export default router
