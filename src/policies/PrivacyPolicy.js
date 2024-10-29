import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-dark/80 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-dark/60 text-light/75 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-primary">Kebijakan Privasi MediaDown</h1>
          <p className="text-sm mb-6 text-light/50">Terakhir diperbarui: 29 Oktober 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Pendahuluan</h2>
            <p className="mb-4">
              MediaDown ("kami", "kita", atau "layanan kami") berkomitmen untuk melindungi privasi pengguna ("Anda"). Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi yang mungkin kami kumpulkan dari Anda saat menggunakan layanan kami.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Informasi yang Kami Kumpulkan</h2>
            
            <h3 className="text-xl font-semibold mb-3">2.1 Informasi yang Anda Berikan</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>URL media sosial yang Anda masukkan untuk diunduh</li>
              <li>Informasi yang Anda berikan saat menghubungi customer service kami</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.2 Informasi yang Dikumpulkan Secara Otomatis</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Log akses dan penggunaan layanan</li>
              <li>Informasi perangkat dan browser</li>
              <li>Alamat IP</li>
              <li>Data penggunaan layanan</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Penggunaan Informasi</h2>
            <p className="mb-4">Kami menggunakan informasi yang dikumpulkan untuk:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Menyediakan layanan unduhan media</li>
              <li>Meningkatkan dan mengoptimalkan layanan kami</li>
              <li>Menangani masalah teknis</li>
              <li>Berkomunikasi dengan Anda terkait layanan kami</li>
              <li>Mematuhi kewajiban hukum</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Keamanan Data</h2>
            <p className="mb-4">
              Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi informasi Anda dari akses yang tidak sah atau pengungkapan. Namun, tidak ada metode transmisi internet yang sepenuhnya aman, dan kami tidak dapat menjamin keamanan mutlak data Anda.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Berbagi Informasi</h2>
            <p className="mb-4">Kami tidak menjual atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami mungkin membagikan informasi dengan:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Penyedia layanan yang membantu operasional website kami</li>
              <li>Otoritas hukum jika diwajibkan oleh hukum</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Cookie dan Teknologi Pelacakan</h2>
            <p className="mb-4">Kami menggunakan cookie dan teknologi pelacakan serupa untuk:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Mengingat preferensi Anda</li>
              <li>Menganalisis penggunaan website</li>
              <li>Meningkatkan pengalaman pengguna</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Hak Pengguna</h2>
            <p className="mb-4">Anda memiliki hak untuk:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Mengakses informasi pribadi Anda yang kami miliki</li>
              <li>Meminta koreksi informasi yang tidak akurat</li>
              <li>Meminta penghapusan informasi Anda</li>
              <li>Menolak penggunaan informasi Anda untuk tujuan tertentu</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Perubahan Kebijakan Privasi</h2>
            <p className="mb-4">
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diumumkan di website kami. Penggunaan berkelanjutan atas layanan kami setelah perubahan tersebut merupakan persetujuan Anda terhadap Kebijakan Privasi yang diperbarui.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Kontak</h2>
            <p className="mb-4">Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>WhatsApp: [Link WhatsApp customer service]</li>
              <li>Instagram: <a href="https://www.instagram.com/beginneer.noob/" className="text-primary hover:text-primary/80">@beginneer.noob</a></li>
              <li>GitHub: <a href="https://github.com/Beginneernoob" className="text-primary hover:text-primary/80">Beginneernoob</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Pengakuan</h2>
            <p className="mb-4">
              Dengan menggunakan layanan MediaDown, Anda mengakui bahwa Anda telah membaca dan memahami Kebijakan Privasi ini serta menyetujui pengumpulan dan penggunaan informasi Anda sesuai dengan kebijakan ini.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;