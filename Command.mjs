import { intro, outro, text, select, confirm, spinner, isCancel, cancel} from "@clack/prompts";
import chalkAnimation from "chalk-animation"
import chalk from "chalk";

const introAnimation = chalkAnimation.rainbow("Welcome To X Dev Team Command Line");
introAnimation.start()


setTimeout(() =>{
introAnimation.stop();
databaseConsoleProgram();
}, 6000)

async function databaseConsoleProgram() {
    intro(chalk.bold.green("create-your-first-database"));
    
    const createUsername = await text({
        message:"Type a username:",
        placeholder: "blackeye05",
        validate(value) {
            if (value.length === 0) return chalk.bold.bgRed("Username is required");
            
            if (isCancel(value)) {
                cancel("Opps.. Operation cancelled");
                process.exit(0);
            }
        },

        });

        const chooseDatabase = await select({
            message:"Pick up a database",
            options: [
                {value:"mysql", label:"Mysql", hint: "recommended"},
                {value:"sqlite3", label:"Sqlite3"},
                {value:"mongodb", label:"MongoDB"},
                {value:"postgressql", label:"PostgresSql"},
                {value:"redis", label:"Redis"},
            ],
            required: true,
        });
        
        if (isCancel(chooseDatabase)) {
            cancel("Opps.. Operation cancelled");
            process.exit(0);
        }

        const chooseProgrammingLanguage = await select({
            message: "Pick up a programming language",
            placeholder:"Python",
            options: [
                {value:"Javascript", label:"Javascript", hint: "recommended"},
                {value:"python", label:"Python", hint: "recommended"},
                {value:"C++", label:"C++"},
                {value:"C#", label:"C#"},
                {value:"java", label:"Java"},
                {value:"swift", label:"Swift"},
                {value:"C", label:"C"}
            ], 
        });

        if (isCancel(chooseProgrammingLanguage)) {
            cancel("Opps.. Operation cancelled");
            process.exit(0);
        }

        const asktoInstallDependences = await confirm({
            message:"Do you want to install all packages?",
            
        }); 

        if (asktoInstallDependences === true) {
            const spin = spinner();
            spin.start("Installing all necesary packages")
            
            setTimeout(() =>{
                spin.stop("Installed via npm")

                console.log(chalk.bold.cyan("username: " + createUsername));
                console.log(chalk.bold.cyan("language: " + chooseProgrammingLanguage));
                console.log(chalk.bold.cyan("database: " + chooseDatabase));                

                outro(chalk.bold.redBright("Thanks for using this command line tool"));
            },8000); 
        
        }

}

 