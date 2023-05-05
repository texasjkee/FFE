const express = require('express');
const route = express.Router();

const dataBase = [
  {
    id: 1683206371112,
    title: 'Post#1',
    body: 'qweqweqwe',
    hashtag: 'biology'
  },
  {
    id: 1683206378814,
    title: 'Post#2',
    body: 'qweqweqweasdasa',
    hashtag: 'security'
  },
  {
    id: 1683206386023,
    title: 'Post#3',
    body: 'dfsalkflkjsdalfkjsadfsadf',
    hashtag: 'policy'
  },
  {
    id: 1683206386231,
    title: 'Post#4',
    body: 'Qlaksdjlasjdfsalkflkjsdalfkjsadfsadf',
    hashtag: 'policy'
  }
];

route.post('/posts?', (req, res) => {
  const postValue = req.body.post;

  console.log(dataBase)
  if(postValue?.title) {
    dataBase.push(req.body.post);
    //TO_DO: 2 similar titles;??? 
    const foundPost = dataBase.find(post => post.title === req.body.post.title);

    res.json({message: foundPost});
  }
})

route.post('/filter?', (req, res) => {
  const filterValue = req.body.filter;
  const foundPostByHashtag = dataBase.filter(post => post.hashtag.includes(filterValue) === true);

  console.log(filterValue);

  if(foundPostByHashtag.length > 0){
    res.json({message: foundPostByHashtag});
  }
  res.json({message: filterValue});
})

module.exports = route;