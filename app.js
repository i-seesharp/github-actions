const statement = process.env.MY_SECRET || 'Secret not found'
setTimeout(() => console.log(statement), 5000)