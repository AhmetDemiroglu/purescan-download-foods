/* PureScan Foods — marketing landing copy (en / es / tr)
   Strings sourced from the app's locales + App Store listing metadata.
   Exposed as window.I18N; consumed by app.js (data-i18n) and scene.js. */
(function () {
  const EN = {
    meta: {
      title: `PureScan Foods — Know what's really in your food`,
      desc: `Scan food labels and instantly understand E-codes, additives, NOVA and Nutri-Score, with AI guidance for your family's diets and allergens.`,
    },
    nav: { features: `Features`, how: `How it works`, faq: `FAQ`, download: `Download` },
    hero: {
      badge: `AI food &amp; ingredient scanner`,
      title: `Know what's <span class="hl">really</span> in your food.`,
      desc: `Scan a food label and instantly understand E-codes, additives, NOVA and Nutri-Score — with AI guidance tuned to your family's diets and allergens.`,
      ctaPrimary: `Download free`,
      ctaSecondary: `See how it works`,
      note: `Free on iOS &amp; Android · No account needed to scan`,
      scroll: `Scroll`,
    },
    marquee: `E-CODES · NOVA · NUTRI-SCORE · 23 ALLERGENS · 19 DIETS · OCR SCAN · BARCODE · HALAL · KETO · VEGAN · GLUTEN-FREE · AI GURU`,
    features: {
      eyebrow: `Features`,
      heading: `Everything you need to <span class="hl">decode a label</span>.`,
      sub: `From a blurry ingredients list to a clear decision — in seconds.`,
      scan: {
        tag: `Scan`,
        title: `Three ways to scan.`,
        desc: `Snap the label with your camera (OCR), scan the barcode from the OpenFoodFacts database, or paste the ingredients as text. Analysis starts in seconds.`,
        c1: `Camera · OCR`, c2: `Barcode`, c3: `Text`,
      },
      analysis: {
        tag: `Analyze`,
        title: `Every additive, by risk class.`,
        desc: `A safety score, E-code risk levels, the NOVA processing level and Nutri-Score — all on one screen, with a clear diet report and the critical warnings that matter.`,
        c1: `Safety score`, c2: `NOVA`, c3: `Nutri-Score`,
      },
      library: {
        tag: `Learn`,
        title: `A pocket additives encyclopedia.`,
        desc: `Look up 150+ additives by E-code or name, filtered by risk. Understand the NOVA guide and Nutri-Score in plain language — the science behind every label.`,
        c1: `150+ additives`, c2: `EU status`, c3: `Plain language`,
      },
      profiles: {
        tag: `Personalize`,
        title: `Profiles for the whole family.`,
        desc: `Give each family member their own diet and allergen sensitivities — 19 diet programs and 23 allergens, including the EU's 14 mandatory ones.`,
        c1: `19 diets`, c2: `23 allergens`, c3: `Per member`,
      },
      compatibility: {
        tag: `Check`,
        title: `One scan, every profile checked.`,
        desc: `Scan once and PureScan calculates compatibility for everyone at the same time, flagging exactly which ingredient clashes with whose diet or allergy.`,
        c1: `All profiles at once`, c2: `Ingredient-level`, c3: `Instant flags`,
      },
      guru: {
        tag: `Ask`,
        title: `Guru, your AI nutrition assistant.`,
        desc: `Guru knows your profiles and scan history. Ask "What is E249?" or "Is this vegan?" and get answers tailored to you — like a food scientist in your pocket.`,
        c1: `Context-aware`, c2: `Diet-specific`, c3: `Science-based`,
      },
    },
    how: {
      eyebrow: `How it works`,
      heading: `From shelf to decision <span class="hl">in seconds</span>.`,
      s1t: `Scan`, s1d: `Point your camera, scan a barcode, or paste the ingredients list.`,
      s2t: `Analyze`, s2d: `AI reads the label and breaks down additives, NOVA and Nutri-Score.`,
      s3t: `Decide`, s3d: `See compatibility for every profile and decide with confidence.`,
    },
    stats: {
      additives: `additives explained`,
      diets: `diet programs`,
      allergens: `allergens tracked`,
      scan: `ways to scan`,
    },
    download: {
      eyebrow: `Get the app`,
      heading: `Decode your next label tonight.`,
      desc: `Free on iOS and Android. Premium unlocks unlimited scans, unlimited Guru and unlimited family profiles — completely ad-free.`,
      note: `PureScan is not a medical device. AI analyses are for information only.`,
    },
    faq: {
      eyebrow: `FAQ`,
      heading: `Questions, answered.`,
      items: [
        { q: `How do I scan a product?`, a: `<p>Three ways, right on the home screen:</p><ul><li><strong>Camera (OCR):</strong> photograph the ingredients label and the text is read automatically.</li><li><strong>Barcode:</strong> scan the product barcode — data comes from the OpenFoodFacts database.</li><li><strong>Text:</strong> paste an ingredients list manually.</li></ul><p>After scanning, additives, E-codes, NOVA and Nutri-Score appear on a single screen.</p>` },
        { q: `Is it free? What does Premium add?`, a: `<p>Yes — you can scan and analyze for free. <strong>PureScan Premium</strong> is an auto-renewable subscription (monthly or yearly) that adds unlimited scans, unlimited Guru conversations, unlimited family profiles and an ad-free experience.</p>` },
        { q: `How do family profiles and allergens work?`, a: `<p>Define a separate diet preference and allergen sensitivity for each family member. When you scan a product, compatibility for all profiles is calculated at once and risky contents are flagged — across 19 diets and 23 allergens.</p>` },
        { q: `Is this medical advice?`, a: `<p>No. PureScan is not a medical device and does not provide medical advice or dietary prescriptions. It digitizes the information on food labels so the consumption decision is yours — always consult a professional for health decisions.</p>` },
        { q: `How do I delete my data or get support?`, a: `<p>In the app: <strong>Settings &gt; Data Management</strong> to delete your data or account. For anything else, email <strong>info@septimuslab.com</strong> — we usually reply within 1–3 business days.</p>` },
      ],
    },
    footer: {
      tagline: `Technology for healthy living.`,
      product: `Product`, legal: `Legal`, company: `Company`,
      privacy: `Privacy Policy`, terms: `Terms of Use`, support: `Support`, contact: `Contact`,
      rights: `All rights reserved.`,
      disclaimer: `PureScan Foods does not provide medical advice. AI-powered analyses are for informational purposes only.`,
    },
  };

  const ES = {
    meta: {
      title: `PureScan Foods — Conoce lo que realmente comes`,
      desc: `Escanea etiquetas y entiende al instante códigos E, aditivos, NOVA y Nutri-Score, con guía de IA para las dietas y alérgenos de tu familia.`,
    },
    nav: { features: `Funciones`, how: `Cómo funciona`, faq: `Preguntas`, download: `Descargar` },
    hero: {
      badge: `Escáner de alimentos con IA`,
      title: `Conoce lo que <span class="hl">realmente</span> comes.`,
      desc: `Escanea una etiqueta y entiende al instante códigos E, aditivos, NOVA y Nutri-Score — con guía de IA adaptada a las dietas y alérgenos de tu familia.`,
      ctaPrimary: `Descargar gratis`,
      ctaSecondary: `Ver cómo funciona`,
      note: `Gratis en iOS y Android · Sin cuenta para escanear`,
      scroll: `Desliza`,
    },
    marquee: `CÓDIGOS E · NOVA · NUTRI-SCORE · 23 ALÉRGENOS · 19 DIETAS · OCR · CÓDIGO DE BARRAS · HALAL · KETO · VEGANO · SIN GLUTEN · AI GURU`,
    features: {
      eyebrow: `Funciones`,
      heading: `Todo para <span class="hl">descifrar una etiqueta</span>.`,
      sub: `De una lista de ingredientes confusa a una decisión clara — en segundos.`,
      scan: {
        tag: `Escanea`,
        title: `Tres formas de escanear.`,
        desc: `Captura la etiqueta con la cámara (OCR), escanea el código de barras desde la base de datos OpenFoodFacts o pega los ingredientes como texto. El análisis empieza en segundos.`,
        c1: `Cámara · OCR`, c2: `Código de barras`, c3: `Texto`,
      },
      analysis: {
        tag: `Analiza`,
        title: `Cada aditivo, por nivel de riesgo.`,
        desc: `Una puntuación de seguridad, niveles de riesgo de códigos E, el nivel NOVA y el Nutri-Score — todo en una pantalla, con un informe de dieta claro y los avisos críticos que importan.`,
        c1: `Puntuación`, c2: `NOVA`, c3: `Nutri-Score`,
      },
      library: {
        tag: `Aprende`,
        title: `Una enciclopedia de aditivos de bolsillo.`,
        desc: `Busca más de 150 aditivos por código E o nombre, filtrados por riesgo. Entiende la guía NOVA y el Nutri-Score en lenguaje claro — la ciencia detrás de cada etiqueta.`,
        c1: `+150 aditivos`, c2: `Estado UE`, c3: `Lenguaje claro`,
      },
      profiles: {
        tag: `Personaliza`,
        title: `Perfiles para toda la familia.`,
        desc: `Da a cada miembro sus propias dietas y sensibilidades a alérgenos — 19 programas de dieta y 23 alérgenos, incluidos los 14 obligatorios de la UE.`,
        c1: `19 dietas`, c2: `23 alérgenos`, c3: `Por persona`,
      },
      compatibility: {
        tag: `Comprueba`,
        title: `Un escaneo, todos los perfiles.`,
        desc: `Escanea una vez y PureScan calcula la compatibilidad de todos a la vez, señalando qué ingrediente choca con la dieta o alergia de cada uno.`,
        c1: `Todos a la vez`, c2: `Por ingrediente`, c3: `Avisos al instante`,
      },
      guru: {
        tag: `Pregunta`,
        title: `Guru, tu asistente de nutrición con IA.`,
        desc: `Guru conoce tus perfiles e historial. Pregunta "¿Qué es el E249?" o "¿Es vegano?" y recibe respuestas a tu medida — como un científico de alimentos en tu bolsillo.`,
        c1: `Con contexto`, c2: `Según tu dieta`, c3: `Basado en ciencia`,
      },
    },
    how: {
      eyebrow: `Cómo funciona`,
      heading: `Del estante a la decisión <span class="hl">en segundos</span>.`,
      s1t: `Escanea`, s1d: `Apunta la cámara, escanea un código de barras o pega los ingredientes.`,
      s2t: `Analiza`, s2d: `La IA lee la etiqueta y desglosa aditivos, NOVA y Nutri-Score.`,
      s3t: `Decide`, s3d: `Ve la compatibilidad de cada perfil y decide con confianza.`,
    },
    stats: {
      additives: `aditivos explicados`,
      diets: `programas de dieta`,
      allergens: `alérgenos vigilados`,
      scan: `formas de escanear`,
    },
    download: {
      eyebrow: `Consigue la app`,
      heading: `Descifra tu próxima etiqueta esta noche.`,
      desc: `Gratis en iOS y Android. Premium desbloquea escaneos, Guru y perfiles familiares ilimitados — totalmente sin anuncios.`,
      note: `PureScan no es un dispositivo médico. Los análisis con IA son solo informativos.`,
    },
    faq: {
      eyebrow: `Preguntas`,
      heading: `Preguntas, respondidas.`,
      items: [
        { q: `¿Cómo escaneo un producto?`, a: `<p>Tres formas, en la pantalla principal:</p><ul><li><strong>Cámara (OCR):</strong> fotografía la etiqueta y el texto se lee automáticamente.</li><li><strong>Código de barras:</strong> escanea el código — los datos vienen de OpenFoodFacts.</li><li><strong>Texto:</strong> pega una lista de ingredientes manualmente.</li></ul><p>Tras escanear, aditivos, códigos E, NOVA y Nutri-Score aparecen en una sola pantalla.</p>` },
        { q: `¿Es gratis? ¿Qué añade Premium?`, a: `<p>Sí — puedes escanear y analizar gratis. <strong>PureScan Premium</strong> es una suscripción de renovación automática (mensual o anual) que añade escaneos ilimitados, conversaciones con Guru ilimitadas, perfiles familiares ilimitados y experiencia sin anuncios.</p>` },
        { q: `¿Cómo funcionan los perfiles y alérgenos?`, a: `<p>Define una dieta y sensibilidad a alérgenos para cada miembro de la familia. Al escanear, la compatibilidad de todos los perfiles se calcula a la vez y se marcan los contenidos de riesgo — entre 19 dietas y 23 alérgenos.</p>` },
        { q: `¿Esto es asesoramiento médico?`, a: `<p>No. PureScan no es un dispositivo médico y no ofrece consejo médico ni prescripciones. Digitaliza la información de las etiquetas; la decisión de consumo es tuya — consulta siempre a un profesional para decisiones de salud.</p>` },
        { q: `¿Cómo elimino mis datos u obtengo soporte?`, a: `<p>En la app: <strong>Ajustes &gt; Gestión de Datos</strong> para eliminar tus datos o cuenta. Para lo demás, escribe a <strong>info@septimuslab.com</strong> — normalmente respondemos en 1–3 días hábiles.</p>` },
      ],
    },
    footer: {
      tagline: `Tecnología para una vida saludable.`,
      product: `Producto`, legal: `Legal`, company: `Empresa`,
      privacy: `Política de Privacidad`, terms: `Términos de Uso`, support: `Soporte`, contact: `Contacto`,
      rights: `Todos los derechos reservados.`,
      disclaimer: `PureScan Foods no ofrece consejo médico. Los análisis con IA son solo informativos.`,
    },
  };

  const TR = {
    meta: {
      title: `PureScan Foods — Gıdanda gerçekten ne var, öğren`,
      desc: `Gıda etiketlerini tara; E-kodları, katkı maddeleri, NOVA ve Nutri-Score'u anında öğren. Aile diyet ve alerjenlerine göre yapay zeka rehberliğiyle.`,
    },
    nav: { features: `Özellikler`, how: `Nasıl çalışır`, faq: `SSS`, download: `İndir` },
    hero: {
      badge: `Yapay zeka ile gıda tarama`,
      title: `Gıdanda <span class="hl">gerçekten</span> ne var?`,
      desc: `Bir etiketi tara; E-kodları, katkı maddeleri, NOVA ve Nutri-Score'u anında öğren — ailenin diyet ve alerjenlerine göre yapay zeka rehberliğiyle.`,
      ctaPrimary: `Ücretsiz indir`,
      ctaSecondary: `Nasıl çalışır?`,
      note: `iOS ve Android'de ücretsiz · Taramak için hesap gerekmez`,
      scroll: `Kaydır`,
    },
    marquee: `E-KODLARI · NOVA · NUTRI-SCORE · 23 ALERJEN · 19 DİYET · OCR TARAMA · BARKOD · HELAL · KETO · VEGAN · GLUTENSİZ · AI GURU`,
    features: {
      eyebrow: `Özellikler`,
      heading: `Bir etiketi <span class="hl">çözmek</span> için her şey.`,
      sub: `Karışık bir içindekiler listesinden net bir karara — saniyeler içinde.`,
      scan: {
        tag: `Tara`,
        title: `Üç farklı tarama yöntemi.`,
        desc: `Etiketi kameranla çek (OCR), barkodu OpenFoodFacts veritabanından okut ya da içindekileri metin olarak yapıştır. Analiz saniyeler içinde başlar.`,
        c1: `Kamera · OCR`, c2: `Barkod`, c3: `Metin`,
      },
      analysis: {
        tag: `Analiz et`,
        title: `Her katkı maddesi, risk sınıfıyla.`,
        desc: `Güvenlik puanı, E-kodu risk seviyeleri, NOVA işleme seviyesi ve Nutri-Score — hepsi tek ekranda; net diyet raporu ve önemli kritik uyarılarla.`,
        c1: `Güvenlik puanı`, c2: `NOVA`, c3: `Nutri-Score`,
      },
      library: {
        tag: `Öğren`,
        title: `Cebinde katkı maddeleri ansiklopedisi.`,
        desc: `150'den fazla katkı maddesini E-kodu ya da isimle, risk seviyesine göre ara. NOVA rehberini ve Nutri-Score'u sade bir dille anla — her etiketin arkasındaki bilim.`,
        c1: `150+ katkı`, c2: `AB statüsü`, c3: `Sade dil`,
      },
      profiles: {
        tag: `Kişiselleştir`,
        title: `Tüm aile için profiller.`,
        desc: `Her aile üyesine kendi diyet ve alerjen hassasiyetlerini tanımla — 19 diyet programı ve AB'nin zorunlu 14'ü dahil 23 alerjen.`,
        c1: `19 diyet`, c2: `23 alerjen`, c3: `Kişiye özel`,
      },
      compatibility: {
        tag: `Kontrol et`,
        title: `Tek tarama, tüm profiller kontrol.`,
        desc: `Bir kez tara; PureScan herkes için uyumluluğu aynı anda hesaplar ve hangi içeriğin kimin diyeti ya da alerjisiyle çeliştiğini tam olarak işaretler.`,
        c1: `Hepsi aynı anda`, c2: `İçerik bazında`, c3: `Anında uyarı`,
      },
      guru: {
        tag: `Sor`,
        title: `Guru, yapay zeka beslenme asistanın.`,
        desc: `Guru profillerini ve tarama geçmişini bilir. "E249 nedir?" ya da "Bu vegan mı?" diye sor, sana göre yanıt al — cebinde bir gıda bilimci gibi.`,
        c1: `Bağlam farkında`, c2: `Diyetine özel`, c3: `Bilime dayalı`,
      },
    },
    how: {
      eyebrow: `Nasıl çalışır`,
      heading: `Raftan karara <span class="hl">saniyeler içinde</span>.`,
      s1t: `Tara`, s1d: `Kameranı doğrult, barkod okut ya da içindekileri yapıştır.`,
      s2t: `Analiz et`, s2d: `Yapay zeka etiketi okur; katkı maddelerini, NOVA ve Nutri-Score'u ayrıştırır.`,
      s3t: `Karar ver`, s3d: `Her profil için uyumluluğu gör ve güvenle karar ver.`,
    },
    stats: {
      additives: `katkı maddesi açıklaması`,
      diets: `diyet programı`,
      allergens: `alerjen takibi`,
      scan: `tarama yöntemi`,
    },
    download: {
      eyebrow: `Uygulamayı al`,
      heading: `Bir sonraki etiketini bu akşam çöz.`,
      desc: `iOS ve Android'de ücretsiz. Premium; sınırsız tarama, sınırsız Guru ve sınırsız aile profili sunar — tamamen reklamsız.`,
      note: `PureScan tıbbi bir cihaz değildir. Yapay zeka analizleri yalnızca bilgilendirme amaçlıdır.`,
    },
    faq: {
      eyebrow: `SSS`,
      heading: `Sorular, yanıtlandı.`,
      items: [
        { q: `Bir ürünü nasıl tararım?`, a: `<p>Ana ekranda üç yöntem var:</p><ul><li><strong>Kamera (OCR):</strong> içindekiler etiketinin fotoğrafını çek, metin otomatik okunur.</li><li><strong>Barkod:</strong> ürün barkodunu okut — bilgi OpenFoodFacts veritabanından gelir.</li><li><strong>Metin:</strong> içindekiler listesini elle yapıştır.</li></ul><p>Tarama sonrası katkı maddeleri, E-kodları, NOVA ve Nutri-Score tek ekranda gösterilir.</p>` },
        { q: `Ücretsiz mi? Premium ne katıyor?`, a: `<p>Evet — ücretsiz tarayıp analiz edebilirsin. <strong>PureScan Premium</strong>, aylık veya yıllık sunulan otomatik yenilenen bir aboneliktir; sınırsız tarama, sınırsız Guru sohbeti, sınırsız aile profili ve reklamsız kullanım sağlar.</p>` },
        { q: `Aile profilleri ve alerjenler nasıl çalışır?`, a: `<p>Her aile üyesine ayrı diyet tercihi ve alerjen hassasiyeti tanımlarsın. Bir ürün taradığında tüm profiller için uyumluluk aynı anda hesaplanır ve riskli içerikler işaretlenir — 19 diyet ve 23 alerjen arasında.</p>` },
        { q: `Bu tıbbi tavsiye mi?`, a: `<p>Hayır. PureScan tıbbi bir cihaz değildir; tıbbi tavsiye ya da diyet önerisi vermez. Gıda etiketlerindeki bilgileri dijitalleştirir; tüketim kararı sana aittir — sağlık kararları için mutlaka bir uzmana danış.</p>` },
        { q: `Verilerimi nasıl silerim ya da destek alırım?`, a: `<p>Uygulama içinden: <strong>Ayarlar &gt; Veri Yönetimi</strong> ile verilerini veya hesabını silebilirsin. Diğer her şey için <strong>info@septimuslab.com</strong> adresine yaz — genellikle 1–3 iş günü içinde yanıt veriyoruz.</p>` },
      ],
    },
    footer: {
      tagline: `Sağlıklı yaşam için teknoloji.`,
      product: `Ürün`, legal: `Yasal`, company: `Şirket`,
      privacy: `Gizlilik Politikası`, terms: `Kullanım Koşulları`, support: `Destek`, contact: `İletişim`,
      rights: `Tüm hakları saklıdır.`,
      disclaimer: `PureScan Foods tıbbi tavsiye vermez. Yapay zeka destekli analizler yalnızca bilgilendirme amaçlıdır.`,
    },
  };

  window.I18N = { en: EN, es: ES, tr: TR };
})();
