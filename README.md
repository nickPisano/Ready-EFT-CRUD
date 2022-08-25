# Ready-EFT-CRUD
## How To Intall and Use this program
1. First Clone the repository
2. Create a dotenv file to secure a path for sequelize (file name should be ".env")
Example: 
```
DB_USER=root
DB_PASSWORD=password
DB_NAME=readyeft_db
```
3. Open mySQLWorkbench and enter in the schema.sql as an action
```
-- DROP DATABASE
DROP DATABASE IF EXISTS readyEft_DB;

-- CREATE DATABASE
CREATE DATABASE readyEft_DB;
```

4. npm install in the root folder within terminal
5. npm run seed in the root folder within terminal
6. npm run develop in the root folder within terminal