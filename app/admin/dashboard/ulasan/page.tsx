"use client";
import { useEffect, useState } from "react";
import AdminSidebar from "@/app/components/AdminSidebar";

interface Ulasan {
  id: number;
  name: string;
  job: string;
  message: string;
  created_at: string;
}

export default function Ulasan() {
  const [ulasan, setUlasan] = useState<Ulasan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUlasan = async () => {
      try {
        const res = await fetch("/api/ulasan");
        const result = await res.json();

        if (result.success && Array.isArray(result.data)) {
          setUlasan(result.data);
        } else {
          console.error(result.message || "Response API tidak valid");
          setUlasan([]);
        }
      } catch (error) {
        console.error("Gagal mengambil data ulasan:", error);
        setUlasan([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUlasan();
  }, []);

  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4 font-poppins text-darkb">
          Data Ulasan Pengguna
        </h1>

        <div className="overflow-x-auto rounded-xl shadow bg-white">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3">No</th>
                <th className="px-4 py-3">Tanggal Dibuat</th>
                <th className="px-4 py-3">Job</th>
                <th className="px-4 py-3">Nama</th>
                <th className="px-4 py-3">Pesan</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center">
                    Memuat data...
                  </td>
                </tr>
              ) : ulasan.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center">
                    Data ulasan tidak tersedia
                  </td>
                </tr>
              ) : (
                ulasan.map((reviews, index) => (
                  <tr key={reviews.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">
                      {new Date(reviews.created_at).toLocaleDateString("id-ID")}
                    </td>
                    <td className="px-4 py-3">{reviews.job}</td>
                    <td className="px-4 py-3">{reviews.name}</td>
                    <td className="px-4 py-3">{reviews.message}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}





// "use client";
// import { useEffect, useState } from "react";
// import AdminSidebar from "@/app/components/AdminSidebar";

// interface Ulasan {
//     id: number;
//     name: string;
//     job: string;
//     message: string;
//     created_at: string;
// }

// export const runtime = "nodejs";


// export default function Ulasan() {
//     const [ulasan, setUlasan] = useState<Ulasan[]>([]);
//         const [loading, setLoading] = useState(true);

//         useEffect(() => {
//   const fetchUlasan = async () => {
//     try {
//       const res = await fetch("/api/ulasan");
//       const data = await res.json();

//       // KUNCI
//       if (Array.isArray(data)) {
//         setUlasan(data);
//       } else if (Array.isArray(data.ulasan)) {
//         setUlasan(data.ulasan);
//       } else if (Array.isArray(data.data)) {
//         setUlasan(data.data);
//       } else {
//         setUlasan([]);
//         console.error("Format API tidak sesuai:", data);
//       }
//     } catch (error) {
//       console.error("Gagal mengambil data ulasan:", error);
//       setUlasan([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchUlasan();
// }, []);


//     //         useEffect(() => {
//     //     const fetchUlasan = async () => {
//     //         try {
//     //             const res = await fetch("/api/ulasan");
//     //             const data = await res.json();
//     //             setUlasan(data);
//     //         } catch (error) {
//     //             console.error("Gagal mengambil data pengguna:", error);
//     //         } finally {
//     //             setLoading(false);
//     //         }
//     //     };

//     //     fetchUlasan();
//     // }, []);
//     return (
//         <div className="flex">
//             {/* Sidebar */}
//             <AdminSidebar />

//             {/* Konten */}
//             <div className="flex-1 p-6">
//                 <h1 className="text-2xl font-semibold mb-4 font-poppins text-darkb">Data Ulasan Pengguna</h1>

//                 <div className="overflow-x-auto rounded-xl shadow bg-white">
//                     <table className="min-w-full text-sm text-left">
//                         <thead className="bg-gray-100 text-gray-700">
//                             <tr>
//                                 <th className="px-4 py-3">No</th>
//                                 <th className="px-4 py-3">Tanggal Dibuat</th>
//                                 {/* <th className="px-4 py-3">Email</th> */}
//                                 <th className="px-4 py-3">Job</th>
//                                 <th className="px-4 py-3">Nama</th>
//                                 <th className="px-4 py-3">Pesan</th>
//                             </tr>
//                         </thead>

//                         <tbody className="divide-y">
//                              {loading ? (
//                                 <tr>
//                                     <td colSpan={6} className="px-4 py-6 text-center">
//                                         Memuat data...
//                                     </td>
//                                 </tr>
//                             ) : ulasan.length === 0 ? (
//                                 <tr>
//                                     <td colSpan={6} className="px-4 py-6 text-center">
//                                         Data pengguna tidak tersedia
//                                     </td>
//                                 </tr>
//                             ) : (
//                                 ulasan.map((reviews, index) => (
//                                     <tr key={reviews.id} className="hover:bg-gray-50">
//                                         <td className="px-4 py-3">
//                                             <h1>{index + 1}</h1>
//                                         </td>
//                                         <td className="px-4 py-3">
//                                             <h1>
//                                                 {new Date(reviews.created_at).toLocaleDateString("id-ID")}
//                                             </h1>
//                                         </td>
//                                         <td className="px-4 py-3">
//                                             <h1>{reviews.job}</h1>
//                                         </td>
//                                         <td className="px-4 py-3">
//                                             <h1>{reviews.name}</h1>
//                                         </td>
//                                         <td className="px-4 py-3">
//                                             <h1>{reviews.message}</h1>
//                                         </td>
//                                         {/* <td className="px-4 py-3">
//                                             <h1>{user.password}</h1>
//                                         </td> */}
//                                     </tr>
//                                 ))
//                             )}

//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }
