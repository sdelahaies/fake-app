import jwt from "jsonwebtoken";

export async function POST(req) {
    const body = await req.json();
    const { username, password } = body;
    // console.log(username,password)
    // console.log(process.env.APP_USERNAME,process.env.APP_PASSWORD)
    if (username === `${process.env.APP_USERNAME}` && password === `${process.env.APP_PASSWORD}`) {
        const argument = `${username}.admin`
        const token = jwt.sign({ argument }, `${process.env.SECRET_KEY}`, { expiresIn: "1h" });
        return new Response(JSON.stringify({ token }), { status: 200 });
    } else {
        return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 401 });
    }
}
