const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.ATLAS_URI;

let _db; 

module.exports = {
  connectToServer: function (callback) {
    console.log("Attempting to Connect");
    // Create a mongoClient with a MongoClientOptions object to set the stable API version
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    async function run() {
      try {
        // Connect t oclient to the server
        await client.connect();
        // Send a ping to confirm a successful db connection
        await client.db("admin").command({ ping: 1 });
        console.log(
          "Pinged your deployment. You successfully conect to MongoDb!"
        );

        // This gives us access to our highscore database
        _db = client.db("banking-app");
        console.log("Successfully connected to banking-app scores database");
      } finally {
        // Ensures that the client will close when you finish/error
        // console.log("Closing the client");
        // await client.close();
      }
    }
    run().catch(console.dir);
  },

  getDb: function () {
    return _db;
  },
};
