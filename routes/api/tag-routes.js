const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll(
    {
      include: [
        {
          model: Product        
        }]
    }
  )
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get('/:id', (req, res) => {
//   // find a single tag by its `id`
//   // be sure to include its associated Product data
// });

router.get('/:id', (req, res) => {
  // find one tag by its `id` value
  // be sure to include its associated Products
  Tag.findOne(
    {
      where: {
        id: req.params.id
      },
      include: [Product]
    })
    .then(dbTagData => {
      if (!dbTagData) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json(dbTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag by its `id` value
  Tag.update({
    tag_name: req.body.tag_name
  },
  {
    where: {
      id: req.params.id
    }
  }  
  )
  .then(dbTagData=> {
    if(!dbTagData){
      res.status(404).json({message:'No tag found with this id'});
      return;
    }
    res.json(dbTagData)
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  })
});

// router.delete('/:id', (req, res) => {
//   // delete on tag by its `id` value
// });

router.delete('/:id', (req, res) => {
  // delete a tag by its `id` value
  Tag.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(dbTagData =>{
    if(!dbTagData){
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    res.json(dbTagData)
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;
