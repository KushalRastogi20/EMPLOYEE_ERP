//login
import dbConnect from '@/lib/dbConnect';
import Employee from '@/models/Employee';

export async function POST(req) {
    await dbConnect();
    const data = await req.json();

    try {
        const employee = await Employee.create(data);
        return new Response(JSON.stringify(employee), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }
}

export async function GET() {
    await dbConnect();

    try {
        const employees = await Employee.find({});
        return new Response(JSON.stringify(employees), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
