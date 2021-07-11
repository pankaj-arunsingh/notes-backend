const mongoose = require('mongoose');

// eslint-disable-next-line no-undef
if (process.argv.length < 3) {
  console.log(
    'Please provide the password as an argument: node mongo.js <password>'
  );
  // eslint-disable-next-line no-undef
  process.exit(1);
}

// eslint-disable-next-line no-undef
const password = process.argv[2];

//const url = `mongodb+srv://fullstack:${password}@cluster0-ostce.mongodb.net/test?retryWrites=true`;

const url = `mongodb+srv://fullstackopen:${password}@cluster0.pskvq.mongodb.net/note-app-test?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model('Note', noteSchema);

// eslint-disable-next-line no-unused-vars
const note = new Note({
  content: 'Pankaj is super awesome',
  date: new Date(),
  important: true,
});

note.save().then((result) => {
  console.log('note saved!', result);
  mongoose.connection.close();
});
// Note.find({}).then((result) => {
//   result.forEach((note) => {
//     console.log(note);
//   });
//   mongoose.connection.close();
// });
