import React from "react";
import CarouselImages from "../carousel/CarouselImages";

const PickedForToday = (title, images = []) => {
  return (
    <div>
      <CarouselImages
        title="picked For Today"
        images={[
          {
            url: "https://occ-0-4619-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWyQAuYOzhoGsYkAtK8HJ1-Fso7jI8MxLEk0RUJcb39_iNHY-SxZgbj0scz4VZCDdZ3CX8UhMf9UWAEhtnUL1LFCL75SakR_xCWryigmxmyj0i3gSEZ-MEZ9oj0F4u_Xkqi1EKH0r2_sl25qVEcCjICLL_r3s77mgO1SNyFfl5hEaTf--OZ-xfya71NmaV5vPs9cL6diC1qVKEb5NYuuTsgIyguUlAJSLGxWLfl8Lv66wRX-VVq8b3jNQg7D9WK0T9JypeZdvcsHjjv0hAu1U02roplN.jpg?r=9a7",
          },
          {
            url: "https://occ-0-4619-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUp-5WpquoZIM3viteFY8hauNnNp9wHMGjups4xPww6JSRQmzBHfm_Hbj848SCg1r1jCQYHzBn5ezAJ_IgJylUpyo30FCTmNSoj8aq4bOyDeORVbP6OSe5gQn9EA8TH1hJbr.jpg?r=0f5",
          },
          {
            url: "https://occ-0-4619-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR5vP-70IER65d9TCg1dzVSp3lVGupAB3Mu8uyZP1Cr0ckQTm-IkEVaY8lq8in5f6ThESNvcLqc96I-KWT9fTsay1q-P6LzgrzBhpnQYp9Vbp02kSQ2OHbWNGHXTcLvYyse4PItPHFm8drboXrUVGI4pJjczdHL7A3Jh4GY52scX4nsxc7pumi23zlHUgqGD1ZhDJd8q5J7tTKMV6qTVZ7G_tiUxn6vh6Y01qHSOOieawXN-2Dman7Kn5s64_sL3BhXJugFYXXGK09KKpLzeFlmEGmGR.jpg?r=411",
          },
          {
            url: "https://occ-0-4619-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWoc7bEmOpXfg0fBAMwomSBpZz7O3Wxdmzx_irJMu9jjUHrChm2U34RdC489bIPtKsplVWP-HfcwY3rVBbZMPOo7KB4oeQOP3v0.jpg?r=e92",
          },
          {
            url: "https://occ-0-4619-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWyepOjPIRFSM3lYqC94dyq51Xv4YJ1yQS97gBrQAwfrPZ1IWqDnto6QQHGWgkKQp_TwOvRa1VDxmJjEmhejP8BChbZM6j060B4boDqcohcHxRSZsDYK4VePCQAA3RXefKHSFz9l1lNa1GDiJNcdm-CgeejrMi3FALkBKicBtE4DVoaWeD_3wp3giFH51IqWf8UBeVNcKVuZaRB7ydIznK-QW_hot_a8_lxC7IKtaNRiIiP0vfxRsnqpdoegDZe4HVE7cE5P-zUUURasTh1qiBD2IiMK9KRAYmiY4Kk-oZhy3w-w8L4AARab.jpg?r=27b",
          },
          {
            url: "https://occ-0-4619-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABV13QIvXcDjpCAT4vNLqwwFV61drqw_x9JX_wIpDli_PJX_zC2aj_I8ybfM2msR8_GTZRe2LwwIxP4ujBUMcFjwxCBJf94wX6RqsMRzWfY1Tn5ev82dzAo1272u_wxZUqeTM.jpg?r=c56",
          },
          {
            url: "https://occ-0-4619-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaJIZ7RrlAYTt7k4clBdJw4Z8-9Y3dicAv7i9q5FepOk-MNxTYb5rFnuPxnspY2aA_yHPmDempkj1B252NMKjI_OVzsIUvSN6Rs.jpg?r=f9b",
          },
          {
            url: "https://occ-0-4619-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVSdAKVngOty8sEYPNqhYD45znLiAoZeKw05uPxOKK9ksoz9J4-m3RqXDmdjZ9WyKDT3YI3CqHLaonWAcpnRsQNSiaHqsTWOB5GO-DllDX-xM8bUkHKCq79PTGAZXgiyOLbNLJizuwJI4BnAdBAh-B_zqVWFxaWdMjsT91YEQyXgEJSEzrCFZpXg_qE4asUewWPXJ7XzqrdAnl92TGOdUW4EI1snGjxgHn4CwtiqevtF_7ovVVpr3gmU0Q66HbMf2Pmg4UyoSMHzSL-1E4qftaeBPR2nNlpFL6BsVbC_jixsDWJdZm58rlR6.jpg?r=46d",
          },
          {
            url: "https://occ-0-4619-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWzcFHThr9og78Vk8BahGwUXzmKbZj4L_Y6NUHVUbRt7lJ273CG5gBc1188TMxJSAv5ythiQS2NpiyOBJxICCRTRJFYQvV3fLpgChbLTtbBm3S6_AUmZXDWi7LOcaMK2CS8VG1rYBd6Wulbkz0Jp3Jr4cEd7bLf8cj-b-y2CAaCz8llNoB1vSNI9unrnxJ1q-rqajI7T85vPKCQqNKNixdX0_LUE1MT_yoVymBIJPoD5SMkvont_QxKgXjqBVIfYbyCjGu8ZBjEJXZiumAYd-i3Cn8-qrI2MA-yZEop4nIxnzruG0ZCFvwSQ.jpg?r=6a3",
          },
          {
            url: "https://occ-0-4619-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcVGVouFdLwq5jiaMlunc9AOxleA6jGGWidFr-jHiefL2LAcQYab5KdfSyx3dSrYXxpEt5UKtRsp8sJPTmFUbzwo3ueevPxrS1o.jpg?r=313",
          },
          {
            url: "https://occ-0-4619-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb49CGvKNKlCf7pL33M6cXiqme1viuZIzOiVl1rkZ0HiPtOjnaH52qobGtA8WiluCETu3VAbdnaHbW2Yc0UhuFmrAeYjsu7AEKc.jpg?r=904",
          },
        ]}
      />
    </div>
  );
};
export default PickedForToday;
