import { Router } from "express";
import *as controlle from '../controllers/authlogin.js'
import {checkAuthentication}  from '../controllers/authlogin.js' ;
import { getUsers, postUser, getProfilePage, login,logout }  from'../controllers/userController.js' ;

import *as controller from '../controllers/controllers.js'

const router=Router();
router.route('/questions')
.get(checkAuthentication,controller.getqestions)
.post(checkAuthentication,controller.insertqestions)
.put(checkAuthentication,controller.updatequestion)

router.route('/result')
.get(checkAuthentication,controller.getresult)
.delete(checkAuthentication,controller.dropresult)
.post(checkAuthentication,controller.storeresult)
router.route('/cover')
.get(checkAuthentication,controller.getcover)
.post(checkAuthentication,controller.insertcover) 
.put(controller.updatecover)
router.route('/cover/:id')
.delete(checkAuthentication,controller.delcover)
router.route('/questions/:id')
.get(checkAuthentication,controller.getqestionsBYID)

router.route('/questions/:idcover/:id')
.delete(checkAuthentication,controller.delquestion)


router.get('/users', checkAuthentication, getUsers);
router.get('/profile', checkAuthentication, getProfilePage)
router.post('/signup', checkAuthentication,postUser);
router.post('/login', login)
router.get('/logout',checkAuthentication, logout)



export default router
