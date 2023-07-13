import TokenModel from '../models/Token.js'
import UserModel from '../models/User.js'
import bcrypt from 'bcrypt';
export async function getUsers  (req, res)  {
  User.find((err, users) => {
    if (err) res.send('error while getting users');
    else res.send(users)
}
)
}

export async function postUser (req, res)  {
  const user = new UserModel(req.body);
  console.log(user)

  user.save()
  .then(doc => {
    console.log('User saved:', doc);
    res.send('saved user');
  })
  .catch(err => {
    console.error('Error while saving user:', err);
    res.send('error while saving user');
  });
}
export async function getProfilePage (req, res)  {
  const currentUser = req.user;
  res.send(currentUser);
};

export async function login  (req, res)  {
  const { username, password } = req.body;
  console.log(password)
  UserModel.findOne({ username })
  .exec()
  .then(user => {
    if (!user) {
    
      res.send({ error: "unauthorized" });
    } else {
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) { 
            res.send({ error: "unauthorized" });
          } else {
            const token = new TokenModel({ userId: user.id, createdAt: Date.now() }) ;
            return token.save();   
          }
        })
        .then(token => {
            if(token){
              res.cookie('session', token.id, {
                httpOnly: true
            })

          res.send(user);
        
        }
        });
    }
  })
  .catch(err => {
    console.error('Error while finding user:', err);
    res.send({ error: "unauthorized" });
  });

  

}
     


export async function logout(req, res) {
  const {session}=req.cookies;
  if(!session)
  {
    
    res.send({ error: "Unauthorized" });
    return;  }
    TokenModel.findOneAndDelete({_id:session}).exec()
    .then(()=>{
      res.clearCookie('session');
      res.send({ message: "Logged out successfully" });
    })
    .catch(err => {
      res.send({ error: "Something went wrong" });
    });

  }
  export async function co  (req, res)  {
    res.clearCookie('session66')
    res.clearCookie('session')

    //res.cookie('session465', 'mihh')
    res.send({ad:"bbhb"});

  }
  export async function coo  (req, res)  {
    //const cookies = req.cookies;
    res.send({ad:"bjujbhb"});
  }
  