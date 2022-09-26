const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint //

router.get('/', async (req, res) => {

  // find all categories //

  Category.finAll({
    include: [
      {
        model:Product,
        attributes:["id"],
      },
    ],
  })
  .then((CategoryData) => res.json(CategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err });
    });
});

 // find one category by its `id` value //

router.get("/:id", async (req, res) => {
 
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock"],
      },
    ],
  })
    .then((CategoryData) => {
      if (!CategoryData) {
        res.status(404).json({ message: "Category not found" });
        return;
      }
      res.json(CategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", async (req, res) => {
  Category.create({
    category_name: req.body.category_name,})
    .then((CategoryData) => res.json(CategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", async (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    })

    .then((CategoryData) => {
      if (!CategoryData) {
        res.status(404).json({ message: "Category not found with this id." });
      }
      res.json(CategoryData);
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}); 

// delete a category by its `id` value //

router.delete("/:id", async (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })

    .then((CategoryData) => {
      if (!CategoryData) {
        res.status(404).json({ message: "Category not found with this id." });
        return;
      }
      res.json(CategoryData);
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;

