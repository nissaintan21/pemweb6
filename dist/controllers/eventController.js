"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEventById = exports.updateEventById = exports.getEventById = exports.createEvent = exports.getAllEvents = void 0;
let events = [];
//1. menampilkan semua event 
const getAllEvents = (req, res) => {
    res.json(events);
};
exports.getAllEvents = getAllEvents;
//2. menyimpan data event baru 
const createEvent = (req, res) => {
    try {
        const { nama, tanggal, lokasi } = req.body;
        // validasi jika ada data yang belum diisi 
        if (!nama || !tanggal || !lokasi) {
            return res.status(500).json({ message: "Nama, tanggal, dan lokasi harus diisi" });
        }
        // jika data sudah valid, buat event baru
        const newEvent = {
            id: events.length + 1,
            nama,
            tanggal: new Date(tanggal),
            lokasi
        };
        // simpan event baru ke array events
        events.push(newEvent);
        res.status(201).json(newEvent);
    }
    catch (error) {
        // jika terjadi error, kirim response error
        res
            .status(500)
            .json({ message: "Terjadi kesalahan saat membuat event", error });
    }
};
exports.createEvent = createEvent;
//3. menampilkan data event berdasarkan id
const getEventById = (req, res) => { };
exports.getEventById = getEventById;
//4. menupdate data event berdasarkan id
const updateEventById = (req, res) => { };
exports.updateEventById = updateEventById;
//5. menghapus data event berdasarkan id
const deleteEventById = (req, res) => { };
exports.deleteEventById = deleteEventById;
//# sourceMappingURL=eventController.js.map