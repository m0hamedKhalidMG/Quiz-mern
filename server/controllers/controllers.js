import { Cover, Questions } from "../models/questionScheme.js";
import results from "../models/resultScheme.js";
import cron from "node-cron";
import validator from 'validator';

export async function getqestions(req, res) {
  try {
    const title = req.query.title;
    /* await Questions.deleteMany({})
    await Cover.deleteMany({})*/
    console.log(title);

    const q = await Questions.find().populate({
      path: "cover",
      match: { title: title },
    });
    const filteredQ = q.filter((doc) => doc.cover !== null);
    const currentDate = new Date();
    const options = {
      timeZone: "Europe/Bucharest",
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };
    const easternEuropeTime = currentDate.toLocaleString("en-US", options);
    const time = easternEuropeTime.match(/\d{2}:\d{2}:\d{2}/)[0];
    const date = easternEuropeTime.match(
      /[a-zA-Z]{3}, [a-zA-Z]{3} \d{2}, \d{4}/
    )[0];
    const [dateS, timeS] = filteredQ[0].cover.starttime.split("&");
    console.log(date);
    console.log(dateS);
    console.log(time);
    console.log(timeS);
    const [hours1, minutes1, seconds1] = time.split(":");
    const [hours2, minutes2, seconds2] = timeS.split(":");
    const totalSeconds1 =
      parseInt(hours1) * 3600 + parseInt(minutes1) * 60 + parseInt(seconds1);
    const totalSeconds2 =
      parseInt(hours2) * 3600 + parseInt(minutes2) * 60 + parseInt(seconds2);
    const differenceInSeconds = totalSeconds1 - totalSeconds2;
    console.log(differenceInSeconds + "s");
    const due = filteredQ[0].cover.duration * 60;
    const timedown = due - differenceInSeconds;
    var minute = parseInt(timedown / 60);
    var sec = timedown % 60;
    if (minute < 0) {
      minute = 0;
      sec = 0;
    }
    if (dateS <= date && timeS <= time) {
      console.log(minute + ":" + sec);
      //filteredQ[0].cover.duration=filteredQ[0].cover.duration-minute
      //console.log( filteredQ[0].cover.duration)

      console.log(minute);
      res.json({ filteredQ, minute, sec });
    } else {
      res.json({ error });
    }
  } catch (error) {
    res.json({ error });
  }
}
export async function delcover(req, res) {
  const id = req.params.id;

  Cover.findByIdAndDelete(id)
    .then((deletedcover) => {
      if (!deletedcover) {
        return res.status(404).json({ error: "cover not found" });
      } else {
        Questions.findOneAndDelete({ cover: id }).then((deleted) => {
          console.log(deleted);
          if (deleted)
            return res.json({
              message: "cover deleted successfully and question",
              deletedcover,
            });
          else
            return res.json({
              message: "cover deleted successfully ",
              deletedcover,
            });
        });
      }
    })
    .catch((error) => {
      return res.json({ message: "error ", error });
    });
}
export async function updatecover(req, res) {
  const { id, newObject } = req.body;

  Cover.findByIdAndUpdate(id, newObject, { new: true })
    .then((Updatedcover) => {
      console.log("Updatedcover:", Updatedcover);
      res.json({ msg: "Data Saved Successfully...!" });
    })
    .catch((error) => {
      res.json({ msg: "Error...!" });

      console.error("Error Updatedcover:", error);
    });
}
export async function insertqestions(req, res) {
  try {
    const { all, title } = req.body;
    const questions = all.questions;
    const answers = all.answers;
    const updatedDocument = await Questions.updateOne(
      { cover: title },
      {
        $push: { questions: { $each: questions }, answers: { $each: answers } },
      },
      { upsert: true }
    );

    res.json({ msg: "Data Saved Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}
export async function dropqestions(req, res) {
  try {
    await Questions.deleteMany({});
    res.json({ mes: "drop questions " });
  } catch (error) {
    res.json({ error });
  }
}
export async function getresult(req, res) {
  try {
    const q = await results.find({});
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}
export async function storeresult(req, res) {
  try {
    const result = [0, 4, 7];

    results.create({ result });

    res.json({ mes: "store result" });
  } catch (error) {
    res.json({ error });
  }
}
export async function dropresult(req, res) {
  try {
    res.json({ mes: "dropresult" });
  } catch (error) {
    res.json({ error });
  }
}
export async function insertcover(req, res) {
  console.log(req.body)

    const newObject =new Cover(req.body);
    const {  duration, num, maxMark } =
      newObject;
      if (!validator.isNumeric(num)) {
        return res.status(400).json({ error: 'Invalid num of question format'   });
      }
      if (!validator.isNumeric(duration)) {
        return res.status(400).json({ error: 'Invalid duration of question format'   });
      }
      if (!validator.isNumeric(maxMark)) {
        return res.status(400).json({ error: 'Invalid maxMark of question format'   });
      }
      newObject.save()
      .then(doc => {
        console.log(doc)
        return res.status(200).json({ message: 'ADD successful' });
      })
      .catch(err => {
        console.error('Error while saving user :', err);
    
        return res.status(400).json({error: err.message });
    
      });
    
    }

export async function dropcover(req, res) {
  try {
    await Questions.deleteMany({});
    res.json({ mes: "drop questions " });
  } catch (error) {
    res.json({ error });
  }
}
export async function getcover(req,  res) {
  try {
    const q = await Cover.find({});
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
} 
export async function getqestionsBYID(req, res) {
  try {
    const id = req.params.id;

    const q = await Questions.findOne({ cover: id });
    if (q) {
      console.log(q);
      res.json(q);
    } else return res.status(404).json({ error: "Questionsver not found" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
export async function updatequestion(req, res) {
  const { _id, newObject } = req.body;
  const { id, options, answers, question } = newObject;
  console.log(_id);
  const updatedQuestion = await Questions.findOneAndUpdate(
    { cover: _id },
    {
      $set: {
        [`questions.${id}.options`]: options,
        [`questions.${id}.question`]: question,
        options,
        [`answers.${id}`]: answers,
      },
    },
    { new: true }
  )
    .then((Updatedquestion) => {
      console.log("Updatedcover:", Updatedquestion);
      res.json({ msg: "Data Saved Successfully...!" });
    })
    .catch((error) => {
      res.json({ msg: "Error...!" });

      console.error("Error Updatedcover:", error);
    });
}
export async function delquestion(req, res) {
  const { id, idcover } = req.params;
  const answers = "del";
  console.log(id);
  Questions.updateOne(
    { cover: idcover },

    { $pull: { questions: { id: id }, answers: { id: id } } },
    { new: true }
  )
    .then((deletedquestion) => {
      if (!deletedquestion) {
        console.log(deletedquestion);

        return res.status(404).json({ error: "question not found" });
      }
      console.log(deletedquestion);
      return res
        .status(200)
        .json({ message: "question deleted successfully ", deletedquestion });
    })

    .catch((error) => {
      return res.json({ message: "error ", error });
    });
}
