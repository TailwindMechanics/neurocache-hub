import { Avatar, Button } from "flowbite-react";
import type { FC } from "react";

const VideoEmbedWithCTAHero: FC = function () {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 pt-8 text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Your Dream Vacation
        </h1>
        <p className="mb-8 font-light text-gray-500 dark:text-gray-400 sm:px-16 md:text-lg lg:text-xl xl:px-48">
          Here at Flowbite we compare a wide range of destinations, flights and
          hotels to conjure up cheap holidays for you to enjoy, time and time
          again.
        </p>
        <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 lg:mb-16">
          <Button href="#" size="lg">
            Discover locations
          </Button>
          <Button color="gray" href="#" size="lg">
            Start a trip request
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
        <div className="my-8 flex items-center justify-center divide-x divide-gray-200 dark:divide-gray-700 lg:my-16">
          <Avatar.Group className="pr-5">
            <Avatar
              alt="bonnie avatar"
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
              rounded
              stacked
              className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
            />
            <Avatar
              alt="bonnie avatar"
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              rounded
              stacked
              className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
            />
            <Avatar
              alt="bonnie avatar"
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
              rounded
              stacked
              className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
            />
            <Avatar
              alt="bonnie avatar"
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
              rounded
              stacked
              className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
            />
          </Avatar.Group>
          <a href="#" className="pl-5 text-gray-900 dark:text-white sm:pl-5">
            <svg
              className="h-6"
              viewBox="0 0 107 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.2564 3.39258H37.2328V5.46702H32.9109V17.161H30.542V5.46702H26.2383L26.2564 3.39258ZM36.7627 7.19285H38.788V9.12043H38.8242C38.8965 8.84506 39.0231 8.58805 39.2039 8.33104C39.3848 8.07403 39.6018 7.83538 39.873 7.63344C40.1262 7.41314 40.4155 7.24792 40.741 7.11942C41.0484 6.99091 41.3739 6.91748 41.6994 6.91748C41.8579 6.91748 41.988 6.92467 42.0853 6.93005C42.1435 6.93327 42.19 6.93584 42.2238 6.93584C42.3142 6.9542 42.4227 6.97255 42.5131 6.97255V9.08371C42.3685 9.047 42.2057 9.02864 42.043 9.01028L42.043 9.01028L41.9986 9.00525C41.8535 8.98871 41.7206 8.97357 41.5728 8.97357C41.2111 8.97357 40.8676 9.047 40.5421 9.19386C40.2166 9.34073 39.9453 9.56102 39.6922 9.83639C39.4571 10.1301 39.2582 10.4789 39.1135 10.9011C38.9689 11.3234 38.8965 11.819 38.8965 12.3698V17.1061H36.7266L36.7627 7.19285ZM50.3263 17.161H52.4601H52.4782V7.19263H50.3082V12.9754C50.3082 13.3609 50.272 13.728 50.1816 14.0585C50.0912 14.3889 49.9646 14.6827 49.7657 14.9213C49.5849 15.16 49.3317 15.3435 49.0243 15.4904C48.7169 15.6373 48.3372 15.7107 47.8851 15.7107C47.2883 15.7107 46.8182 15.5271 46.4927 15.16C46.1491 14.8112 45.9864 14.187 45.9864 13.3058V7.19263H43.8164V13.5261C43.8164 14.8295 44.1057 15.8209 44.6844 16.4634C45.263 17.1243 46.2034 17.4363 47.4873 17.4363C48.0297 17.4363 48.5722 17.2895 49.0966 16.9774C49.6211 16.6653 50.0189 16.2798 50.2901 15.7658H50.3263V17.161ZM56.1475 13.967C56.2199 14.6095 56.4549 15.0501 56.8709 15.3255C57.2868 15.5825 57.7931 15.711 58.3717 15.711C58.5707 15.711 58.8057 15.6926 59.0589 15.6559C59.3121 15.6192 59.5652 15.5641 59.7822 15.4723C60.0173 15.3805 60.1981 15.252 60.3428 15.0684C60.4875 14.8849 60.5598 14.6646 60.5417 14.3892C60.5236 14.1138 60.4332 13.8752 60.2343 13.6916C60.0354 13.508 59.8003 13.3795 59.511 13.251C59.2216 13.1409 58.8781 13.0491 58.4983 12.9756C58.1894 12.9159 57.8805 12.844 57.5618 12.7699L57.341 12.7186C56.9432 12.6268 56.5454 12.5167 56.1656 12.3882C55.7859 12.2597 55.4604 12.0945 55.153 11.8558C54.8636 11.6355 54.6105 11.3601 54.4477 11.0113C54.2669 10.6625 54.1765 10.2587 54.1765 9.74465C54.1765 9.19391 54.3031 8.75332 54.5743 8.38616C54.8275 8.019 55.1711 7.72528 55.5689 7.50498C55.9667 7.28469 56.4188 7.11947 56.907 7.02768C57.3953 6.93589 57.8654 6.89917 58.2994 6.89917C58.8057 6.89917 59.294 6.95424 59.7461 7.06439C60.1981 7.17454 60.6321 7.33976 60.9938 7.59677C61.3735 7.83542 61.6809 8.16587 61.916 8.55138C62.1692 8.9369 62.3138 9.41421 62.3862 9.96494H60.1258C60.0173 9.43256 59.7822 9.08376 59.4206 8.90018C59.0408 8.7166 58.6249 8.62481 58.1367 8.62481C57.992 8.62481 57.7931 8.64317 57.5942 8.66153C57.3772 8.69825 57.1963 8.73496 56.9974 8.80839C56.8166 8.88183 56.6539 8.99197 56.5273 9.12048C56.4007 9.24898 56.3284 9.43256 56.3284 9.65286C56.3284 9.92823 56.4188 10.1302 56.5996 10.2954C56.7804 10.4606 57.0155 10.5891 57.3229 10.7176C57.6123 10.8278 57.9558 10.9196 58.3356 10.993C58.7153 11.0664 59.1131 11.1582 59.511 11.25C59.9088 11.3418 60.2885 11.4519 60.6683 11.5804C61.048 11.7089 61.3916 11.8742 61.6809 12.1128C61.9703 12.3331 62.2234 12.6085 62.4043 12.9389C62.5851 13.2694 62.6755 13.6916 62.6755 14.1689C62.6755 14.7564 62.5489 15.252 62.2777 15.6743C62.0064 16.0781 61.6629 16.4269 61.2469 16.6839C60.831 16.941 60.3428 17.1245 59.8365 17.253C59.3121 17.3632 58.8057 17.4366 58.2994 17.4366C57.6846 17.4366 57.1059 17.3632 56.5815 17.2163C56.0571 17.0695 55.587 16.8492 55.2072 16.5738C54.8275 16.2801 54.5201 15.9313 54.3031 15.4907C54.0861 15.0684 53.9595 14.5544 53.9414 13.9486H56.1295V13.967H56.1475ZM64.9346 7.19319H63.2891V8.82705H64.9346V14.7016C64.9527 15.1055 64.9889 15.491 65.0612 15.8031C65.1335 16.1151 65.2601 16.3722 65.459 16.5925C65.6579 16.7944 65.9292 16.9596 66.2728 17.0698C66.6163 17.1799 67.0684 17.235 67.6471 17.235C67.9002 17.235 68.1172 17.235 68.3523 17.1983C68.5874 17.1799 68.8225 17.1615 69.0575 17.1248V15.4175C68.9272 15.4506 68.7822 15.4688 68.6489 15.4855L68.6055 15.491C68.4608 15.5093 68.2981 15.5093 68.1534 15.5093C67.9002 15.5093 67.7194 15.4726 67.5747 15.4175C67.4482 15.3625 67.3397 15.2707 67.2673 15.1605C67.2131 15.0504 67.1588 14.9035 67.1407 14.7383C67.1227 14.5547 67.1046 14.3711 67.1046 14.1325V8.80869H69.0575V7.17484H67.1046V4.1825H64.9346V7.19319ZM70.5962 7.19285H72.6215V8.55134H72.6577C72.9651 7.96388 73.381 7.56001 73.9235 7.303C74.466 7.04599 75.0446 6.91748 75.6956 6.91748C76.4732 6.91748 77.1423 7.04599 77.7209 7.33971C78.2996 7.61508 78.7697 7.98224 79.1495 8.4779C79.5292 8.95521 79.8185 9.52431 79.9994 10.1668C80.1802 10.8094 80.2887 11.507 80.2887 12.2229C80.2887 12.9022 80.1983 13.5447 80.0355 14.1689C79.8547 14.793 79.6015 15.3621 79.258 15.8394C78.9144 16.3167 78.4804 16.7023 77.9379 16.996C77.3954 17.2897 76.7806 17.4366 76.0573 17.4366C75.7499 17.4366 75.4244 17.3999 75.117 17.3448C74.8096 17.2897 74.5021 17.1979 74.2128 17.0694C73.9235 16.9409 73.6522 16.7757 73.4172 16.5737C73.164 16.3718 72.9651 16.1332 72.8023 15.8761H72.7662V20.8511H70.5962V7.19285ZM77.9741 10.8817C78.1007 11.3039 78.1549 11.7445 78.1549 12.1851C78.1549 12.6257 78.1007 13.0479 78.0103 13.4885C77.9199 13.9107 77.7571 14.2779 77.5401 14.6083C77.305 14.9204 77.0338 15.1958 76.6902 15.3977C76.3466 15.5996 75.9488 15.7098 75.4425 15.7098C74.9904 15.7098 74.6107 15.618 74.2671 15.4344C73.9235 15.2508 73.6342 15.0122 73.3991 14.7001C73.1459 14.388 72.9832 14.0209 72.8566 13.5986C72.73 13.1764 72.6758 12.7175 72.6758 12.2034C72.6758 11.1387 72.9109 10.2758 73.3629 9.63332C73.8331 8.9908 74.5202 8.67871 75.4244 8.67871C75.8584 8.67871 76.2562 8.7705 76.5998 8.97244C76.9253 9.17437 77.2146 9.43139 77.4497 9.76183C77.6848 10.0923 77.8656 10.4594 77.9741 10.8817ZM81.9688 3.39258H84.1387V5.46702H81.9688V3.39258ZM84.1387 7.19263H81.9688V17.161H84.1387V7.19263ZM86.0742 3.39258H88.2442V17.161H86.0742V3.39258ZM92.7673 17.0327C93.3821 17.3081 94.0873 17.4366 94.8649 17.4366C95.6606 17.4366 96.3477 17.2897 96.9625 17.0327C97.5774 16.7757 98.1018 16.4085 98.5177 15.9496C98.9336 15.4723 99.241 14.9215 99.4761 14.279C99.7112 13.6365 99.8196 12.9389 99.8196 12.1678C99.8196 11.4152 99.6931 10.7176 99.4761 10.075C99.2591 9.43252 98.9336 8.86342 98.5177 8.40447C98.0837 7.94552 97.5774 7.57837 96.9625 7.32135C96.3477 7.04599 95.6425 6.91748 94.8649 6.91748C94.0873 6.91748 93.3821 7.06434 92.7673 7.32135C92.1525 7.57837 91.628 7.94552 91.2121 8.40447C90.7962 8.88178 90.4707 9.43252 90.2537 10.075C90.0187 10.7176 89.9102 11.4152 89.9102 12.1678C89.9102 12.9205 90.0367 13.6365 90.2537 14.279C90.4707 14.9215 90.7962 15.4906 91.2121 15.9496C91.6461 16.4085 92.1525 16.7573 92.7673 17.0327ZM94.8629 15.6914C95.3331 15.6914 95.7671 15.5813 96.1106 15.3794C96.4723 15.1774 96.7435 14.902 96.9786 14.5716C97.2137 14.2412 97.3764 13.8556 97.4849 13.4518C97.5934 13.0295 97.6477 12.6073 97.6477 12.1667C97.6477 11.7445 97.5934 11.3223 97.4849 10.9C97.3764 10.4778 97.2137 10.1106 96.9786 9.78019C96.7435 9.44974 96.4542 9.19273 96.1106 8.9908C95.749 8.78886 95.3331 8.67871 94.8629 8.67871C94.3928 8.67871 93.9588 8.78886 93.6152 8.9908C93.2535 9.19273 92.9823 9.4681 92.7472 9.78019C92.5121 10.1106 92.3494 10.4778 92.2409 10.9C92.1324 11.3223 92.0781 11.7445 92.0781 12.1667C92.0781 12.6073 92.1324 13.0295 92.2409 13.4518C92.3494 13.874 92.5121 14.2412 92.7472 14.5716C92.9823 14.902 93.2716 15.1774 93.6152 15.3794C93.9768 15.5996 94.3928 15.6914 94.8629 15.6914ZM102.114 7.19319H100.469V8.82705H102.114V14.7016C102.132 15.1055 102.169 15.491 102.241 15.8031C102.313 16.1151 102.44 16.3722 102.639 16.5925C102.838 16.7944 103.109 16.9596 103.452 17.0698C103.796 17.1799 104.248 17.235 104.827 17.235C105.08 17.235 105.297 17.235 105.532 17.1983C105.767 17.1799 106.002 17.1615 106.237 17.1248V15.4175C106.107 15.4506 105.962 15.4688 105.829 15.4855C105.814 15.4873 105.799 15.4892 105.785 15.491C105.64 15.5093 105.478 15.5093 105.333 15.5093C105.08 15.5093 104.899 15.4726 104.754 15.4175C104.628 15.3625 104.519 15.2707 104.447 15.1605C104.393 15.0504 104.339 14.9035 104.32 14.7383L104.32 14.7381C104.302 14.5546 104.284 14.3711 104.284 14.1325V8.80869H106.237V7.17484H104.284V4.1825H102.114V7.19319Z"
                fill="currentColor"
              />
              <path
                d="M19.8575 7.18847H12.6128L10.3826 0.195312L8.13926 7.18847L0.894531 7.17507L6.75366 11.5023L4.5103 18.4954L10.3694 14.1682L16.2286 18.4954L13.9984 11.5023L19.8575 7.18847Z"
                fill="#00B67A"
              />
              <path
                d="M14.5035 13.0941L14.004 11.5194L10.4023 14.175L14.5035 13.0941Z"
                fill="#005128"
              />
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Rated Best Over{" "}
              <span className="font-medium text-gray-900 dark:text-white">
                15.7k
              </span>{" "}
              Reviews
            </span>
          </a>
        </div>
        <iframe
          className="mx-auto h-64 w-full max-w-2xl rounded-lg sm:h-96"
          src="https://www.youtube.com/embed/mTAupMv-3t8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoEmbedWithCTAHero;
