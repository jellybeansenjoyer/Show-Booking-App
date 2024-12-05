import events from "../../../database/events";

export async function GET(req, { params }) {
    const { id } = params;

    if (!id) {
        return new Response(
            JSON.stringify({ error: "ID parameter is required" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );
    }

    const event = events.find((e) => e.id === parseInt(id));
    if (!event) {
        return new Response(
            JSON.stringify({ error: "Event not found" }),
            { status: 404, headers: { "Content-Type": "application/json" } }
        );
    }

    return new Response(JSON.stringify({ event }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}

export async function POST() {
    return new Response(
        JSON.stringify({ error: "Method Not Allowed" }),
        { status: 405, headers: { "Content-Type": "application/json" } }
    );
}
