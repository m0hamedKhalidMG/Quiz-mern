import  { Cover, Questions } from "../models/questionScheme.js"
import results from "../models/resultScheme.js"
export async function getqestions(req,res){
  const title = req.query.title;
try{
    
   /* await Questions.deleteMany({})
    await Cover.deleteMany({})*/
    console.log(title)

    const q = await Questions.find().populate({
      path: 'cover', match:{title:title}});
      const filteredQ=q.filter(doc=>doc.cover!==null)
    res.json(filteredQ)
var data=q;
}
catch(error){

    res.json({ error })

}
    

}
/*const newQuestion = new Questions({
    questions: questions,
    answers: answers,
    cover: "64a0a5b6a3035a6f74eabe1b" // Assign the Cover document ID to the 'cover' field
  });

  // Save the Question to the database
  newQuestion.save()
    .then(savedQuestion => {
      console.log('Question saved:');
    })
    .catch(error => {
      console.error('Error saving Question:', error);
    });
*/
/*const newCover = new Cover({
    title: 'Cover Title',
    desc: 'Cover Description',
    numofquestion: 10,
    Duration: 60,
    Mark: 100
  });
  
  // Save the Cover to the database
  newCover.save()
    .then(savedCover => {
      console.log('Cover saved:');
  
      // Create a new Question
      const newQuestion = new Questions({
        questions: questions,
        answers: answers,
        cover: savedCover._id // Assign the Cover document ID to the 'cover' field
      });
  
      // Save the Question to the database
      newQuestion.save()
        .then(savedQuestion => {
          console.log('Question saved:');
        })
        .catch(error => {
          console.error('Error saving Question:', error);
        });
    })
    .catch(error => {
      console.error('Error saving Cover:', error);
    });*/
export async function insertqestions(req,res){

    try {
      const { all, title } = req.body;
      const questions=all.questions
      const answers=all.answers
    const cover=  await Cover.findOne({title})            
            res.json({ msg: "Data Saved Successfully...!"})
            Questions.insertMany({questions, answers,cover:cover._id})
    } catch (error) {
        res.json({ error })
    }
    
    
    }
    export async function dropqestions(req,res){

        try{
            await Questions.deleteMany({})
            res.json({"mes":"drop questions "})
        }
        catch(error){
        
            res.json({ error })
        
        }
        
        
        }
        export async function getresult(req,res){

            try{
                const q=await results.find({});
                res.json(q)
            }
            catch(error){
            
                res.json({ error })
            
            }
            
            
            }
            export async function storeresult(req,res){

                try{
                     const result = [0,4,7];
        
                     results.create({result})
                
                    res.json({"mes":"store result"})
                }
                catch(error){
                
                    res.json({ error })
                
                }
                
                
                }
                export async function dropresult(req,res){

                    try{
                        res.json({"mes":"dropresult"})
                    }
                    catch(error){
                    
                        res.json({ error })
                    
                    }
                    
                    
                    }
