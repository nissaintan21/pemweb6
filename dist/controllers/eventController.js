import { Request, Response } from 'express';
import { Event } from "../types/event";
let events = [];
//1. menampilkan semua event 
export const getAllEvents = (req, res) => {
    res.json(events);
};
//2. menyimpan data event baru 
export const createEvent = (req, res) => {
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
//3. menampilkan data event berdasarkan id
export const getEventById = (req, res) => { };
//4. menupdate data event berdasarkan id
export const updateEventById = (req, res) => { };
//5. menghapus data event berdasarkan id
export const deleteEventById = (req, res) => { };
//# sourceMappingURL=eventController.js.map