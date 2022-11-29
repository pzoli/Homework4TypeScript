export module SmokeTest
{
    const Pool = require('pg').Pool;
    enum AvailableCharsets {UTF8, ISO8859_2}
    const person: {
        name: string;
        age: number;
        hobbies: string[];
        role: [[number,string,string,boolean]]; //Tuple array
        userCharset: AvailableCharsets;
    } = {
        name: "Zoltan Papp",
        age: 45,
        hobbies: ['developing','chess'],
        role: [[0,"user","comment",true]],
        userCharset: AvailableCharsets.UTF8
    }
    export async function HelloWorldFromDB():Promise<Array<any>> {
        const pool = new Pool({
            user: 'testuser',
            host: 'localhost',
            database: 'filemap',
            password: 'test1234',
            port: 5432,
        });

        await pool.query('SELECT $1::text as message', ['Hello world from DB!']).then((res: { rows: any[]; }) => {
            console.log(res.rows[0].message);
        });
        let promise: Promise<Array<any>> = new Promise<Array<any>>((resolve,reject) => {
            pool.query('SELECT $1::text as message', ['Promise selected!']).then((res: { rows: any[]; }) => {
                resolve(res.rows);
            })
        })

        return promise;
    }
    export function HelloWorld() {
        person.role.push([1,"admin","ready state",false]);
        console.log("Hello World: " + person.name);
        for(const role of person.role) {
            console.log(role[0]+":"+role[1]+":"+role[2]);
        }
    }
}