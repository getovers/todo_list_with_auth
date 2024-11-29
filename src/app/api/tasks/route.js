import connectMongoDB from "../../../../libs/mongodb";
import Task from "../../../../models/task";
import {NextResponse} from "next/server";

export async function POST(request) {
    const { description, is_completed } = await request.json();
    await connectMongoDB();
    await Task.create({ description, is_completed});
    return NextResponse.json({ message: "Task created successfully."}, {status: 201});
}

export async function GET() {
    await connectMongoDB();
    const tasks = await Task.find();
    return NextResponse.json({tasks});
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id") ;
    await connectMongoDB();
    await Task.findByIdAndDelete(id);
    return NextResponse.json({ message: "Task deleted successfully."}, {status: 200});
}

export async function PUT(request) {
    const { id, is_completed} = await request.json();
    await connectMongoDB();
    await Task.findByIdAndUpdate(id, { is_completed });
    return NextResponse.json({ message: "Task updated successfully." }, {status: 200});
}