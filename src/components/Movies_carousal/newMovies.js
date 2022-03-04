import React from "react";
import Slider from "react-slick";

import Poster from "../Poster/Poster.component";

const NewMovies = (props) => {
    const settings = {
        infinity: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: false,
        InitialSlide: 0
    };

    const MovieImages = [
        {
          src: "https://lh3.googleusercontent.com/WNzWVhT6iYgOhnBGa918cJfSOApJHoDfGvK_UcdJB-bo74l8wF8Qon6zEF4n7OVVa4kZElgXJcEmm7CwWaXwMj7Eev6xad89suVrSRyp2BQO-I8YX4XSxfBBja10H2dplGJXmsnyWU6U5eu0G5OuvMnPJLhwW3TuFMTyTLb5XwSXhxKk9u9TW6I_iiZz2ffnsbzY2xrVT6PwpkxnXyZLgAi3p8VJcaRPeqRNEhIEYfVxuvob0XDejdWKsAa_YIbfOqMNfGoyrnZx3sn0a-69UdhhPcDP7DiCxNYfZs2YOlJJFVfLvceTMkOinAssIcfImmu-1NowCj5d4OX_5bXQy0BMRqCy77a7ePy47XAP1W4oqK7GFZmMWJxAIjRfjOaAbE6u2uCL_Oxlp5QCO97ce248J5WVImFoLPRAEDsHUbV48IUxt57wp59L4x32qYjGuVfDE0VMGjtmJIZedl-_acQtfAElF2aV5ahDGiB4GVrpR9ek5Tdi0dHaFQFf9F-0eDbXNgHS7dtePsf2L3gZKEyI1TG3sHQLyXfC386xcOblOxzoPAxIEEC9ZCEpOWf26GGyiEIfNEVbhgqX0MQ6S-ma8ilMF6eEoJSESlzCH286A3SKKjn1iG-exVRIjQyqFgGIcOzvgrrrr0Y_gR-fCyDkQzc5NoxClz8kGGmwdvy9UyEileWT24ofn7cyk04T2aysQV8YWXBmfHTMA3AXMwvw=w400-h660-no?authuser=0",
          alt: "valimai Image",
          title: "Valimai",
          subtitle: "Action/Thriller",
    
        },
        {
          src: "https://lh3.googleusercontent.com/bZI-Nw60wQlPycWXK7ZPz38_KpFhLCMTwZFE02aaoBfOMp5hiyREMgGdqO9Lpq_ElH1Zp9TFQ2uvQSl5CPgfA-l0q2HykZOjiJC0J8QGrNUIy25Tesqd1iGlXRYXaEzwzlka2WmivgusM5VHxwiOWMB3tQK4FbcIVrtKoAmcWMIXeZ86Qo63C7Gct8BQZHzX_LSn6-jen9ZGbSP7u9B8dxa5f4sf78ycs90Wa_wPS6tPRdH2sV5H5R704Mn6AmavItnK7QW8jkj_kS5INwYVy76ine5mjiZfHnWd_VhHFJ01BQkXd5L9c8zN1Fubl75zOj3SR3JoXVGNpJPOrayjKdXl-C0VPxyBuPjoeNCm7dHHe9n5ry2SgUjHDJYMflvoIY0Y1XKJJaLplXNsYERlpDBfO7_06pCLhq5qfLELB7yJlQ5aMY6uJ7qeUvUvx-ClP2JmRntMSqcgYu6vYgA1v1SDn7DcRmSjV0hea-g74Z73Z3rdmIEWAbzYtfgAFUjVZJ_4e-yWitx9eK9mg2tqupXjv5nDSFZ6W6MSBnxPZPSUZtEp6I22LN_qHKBwhZTjiPJu0tx83ZETXvzE1-UOA154kyDb_G4IIFo-ZHoo8pv4mIwxfsvq6r00MvaC_w4NK7dai7mg9eVMtS4moIHsWyfSRXVAIuTp_5S3X03hmgdBZySSG8430icN2sokXeMjhkEgu1Ni9tWbD8NibpEUfmoW=w210-h346-no?authuser=0",
          alt: "heySinamika Image",
          title: "Hey Sinamika",
          subtitle: "Comedy/Drama/Romantic",
    
        },
        {
          src: "https://lh3.googleusercontent.com/oiOY5H6zMhfAlqGBxsLuZ8-Li_RFcnpMrmFeoh0Qu-9ynmX_zGPkZn-_3quwrCDtmQ6-9t1YaT3G6EGgWp1cizq8uBw2CJ67ag9yDKyIkE91SqBl6MxeivKok673zP4w2ASvfq_M6TgER8KMJcJirFYuGxEs1baqSIt2D83KzYVLCZmUWubmLK3fhLf2LKkIcsSW6Lcr2V0x1pdBHMOGG_P9jIkVZJn1ZlhdPGwPPVvyd3M9tABZterqGJlsGUO0z7OuRxvmsL1tYY2nINmEOjS8DN4NCEtcENphQ0M4Zonk4mf2VeSDW_-93QIj89d9eZAM_OvifufwF4B_vFgc_Afq2bA5DPGZHEYgnuHO4tLCrPK8tUSwENWXetHZrveOQDme3WI5b9s75J4_gY7dp5xMApB0xY3KRqC04Gi3jwxGNhp8Ws861Nddo4SGs3x9QBgWBK4Bn9ixM5LFlxGDp2SV7pGHKbHQSlBtvMAEH_Un8vHAs2KnOBPnSxtIbuMOQv8RvdjeM9UAVa7WUUV1c0Cr2H_OD0UDvJdZeYbTj95JLcy4diaDy8n-32JpziJd2FY16s9xutgp4xHU9rZBybm38CDB8JRaxpfkGWlQmsHS6ZjOE8dLCMvblq9ycZWxAtTijXQzBhTQUskPToXC-B1uawfB__Wb-cQdcHun50DEb318ZkhA7mM6jLFS-la3EujAlw72dP6R1EN9Z6rDdDfe=w400-h660-no?authuser=0",
          alt: "batman Image",
          title: "Batman",
          subtitle: "Action/Adventure/Crime/Drama",
    
        },
        {
          src: "https://lh3.googleusercontent.com/25v0Jv7yTXpwhk7E3LycLff5skYEt6HkuBXBbmaJEmIl1IEqsAhhcFcCtqpWf7fjluxqFmdOW8HH4N0ecc3MRJgUo-BX2cN49aEjD3Cc7iTZluP4EPtvRCNVk2nB9F9oxKhqZW1nPoSOLyL32-Zn0d8VED1Gl5SAh9L9KByCFwLunyLI77pKo4ap8FFOLRAxTg1-BCnnFrZ_c0YBaejWC3NPlesTOS8DHxT5CYaSOc3zqBm971nQ8vcw7u9GKazwDcg_tKWMSgp-JsrFbQQ7FRdyh7FubMFL0cMoHF_Ud6I_AOyjkxZYh8nbn3kKhQEywk1ROcxaqJaSswUSuDUO2lO0rKYcXZBhDS5kTZUIu3mOWTsXEkInKzsoRNk-OO7zFgjmewiWheV72wg3hGYU322L1x3a3D86ar-zjtHGyJZe4XLsEQmuzRZy7hzaUxLuYZjGzB-or_T1rGBrjyFL4z05bmHsGjfyuvrTCtOR3Mnl2O2F73t4oy0wuXLb4pVpvdz3iYq5MD4-X-1xWgvAPk9U_8yS0tHMWzUq8dZTgfiRVUtoiUAqh2WKLq11-s4J7Kp-pim473tPDYbl1hNl20SpZfajH_uQBWC1DhL_noIsfQXObMjc03A7EDdXMDFnrh_Z8YyZ4rLNSYgKaCixCfp635uHi-VbAhhAYXWmH2JiImgjDGQcPW4N4uV4YV1yytHssLwxFwfV1kwENLIhZVuE=w360-h540-no?authuser=0",
          alt: "Pushpa Image",
          title: "Pushpa",
          subtitle: "Action/Thriller",
    
        },
        {
          src: "https://lh3.googleusercontent.com/n2PVD7euFUqnu2zsqkdljqwNfK5k10KsQ1UfBCyCHLFB2W2lnitPIN4LVmDpUbii0CFuN1OBcvFkfL2xW4tYWDrmC54dhrXm9Kk1RFg5PjuHqHF50UxiTSXU5xZJq5elbm_cQWITc9XU4Jonzcx_38oJ8JHOKStO-PcooTJ3Y4hoJNuF9q2w9qNbuyn9-CmbXOAegelt4dOY53DUNC7kk61zYYW6nxfI95Kra_5fdg3puQ0rqQXjZXa7WxGy8_6Xag0smjVtK-Jc1jHR0WSpVtFkwSfAWUnFoGQOEYysbI1wzT3WXbheJB47oc3B5SFiOZ78aHcVrXgwJ_9Yn3OACxDjlfIzWlOT4W9Pt1oGVinkPF_TTdib6p6bL_YzikJ9LuNFVhk0NnXhJINdiQfPX2R6o45nFqipLvvyydrT3iHZxxthHyJaWwLDXg4pU2oJH_SdkaYfaPwXMRHkpemoDiZhbOCrQUR0xllZ758f1oUH7x6X92AzSy47USSuM9VArW943fIcBPJRksuoIJoKf4K4K3kHtDVgv0DQpuK2cC007c6UR4Umobu1xOrwWTdlD4nAV45lAUDFr87DmHtswIVoAwGyUZYR7CRQkez5wy72OeshjEpE2qrjSvbkd4zfAQjtLASEZlXOJoheEDVdxgJhpOKn-Bd8OIX3C0BCSPmFqfpftjb5lv3oTvBVBIZpMg-4S2RuAq8eBDXAJnckeaOG=w360-h540-no?authuser=0",
          alt: "hridayam Image",
          title: "Hridayam",
          subtitle: "Drama/Romantic",
    
        },
        {
          src: "https://lh3.googleusercontent.com/SiKf7Nvf_dFS9YjEpaJeNNZzVwh2IaHnABNyuExEBigqnA0GNkjqLP6p7HwegMtQXZtl0XScS4LuG-_G43P4Ia2iSoht5NDCRz0DgGMgq-VtzY55t7djtKHgUX3nMdhmKcL8JOpknwQzDtGHhApHV1jkUijmRStkLp0d5D2-1dK06jnp5k0ic-gYlQzmJk0X_JYAnyHZBVBsHpYul5cLzjPt51j0XEh5qUuJqd5XpdkZ30_7lsi_EiSQX7_FbmZ-j0BbK3W-ZmSfFyap5cnLSCkzX5p0EaDSzoHZ8PcRu7fv9J8JG1Us_4vLF_0vTA16Res-UJTPB6rDOS2XgSBcvWAQyntcIi_yZx_KbBlN50cw964ClLyybPa5GdkW5ngtWLpAhAD7sWIqMleuqY0UaYFnIdE9P5kIeFylEoMX8uR-tQh4C6dKZQbhienJdndsgYTKAZGhMVP9f8edY_JshXf7n01ZZzZrPH-ECuhwy_JoMpoBnrGVl4OtAvNTKhyiUh0jfWNktPmUg3aP5WlwYGbOADbPKhpZeNdKfMNtq95XpDAdwvyDzA8lK4P2p_NY97_qEjCJn__bmz9R9c4htxH_OiqwbzGN-94lXj-4hLOj3NpCZ0KRLALTS3aZHntAkumANr0zMIWNkQil9FtQvJuwUgtHGNjN4x-3BFVWBfjgF10TnGHGUpZYoBtLaXZLtNyYZ2kOycL2dha8VWWaxi_9=w400-h660-no?authuser=0",
          alt: "Aadavallu Image",
          title: "Aadavallu Meeku Johaarlu",
          subtitle: "Comedy/Drama/Family",
    
        },
        {
          src: "https://lh3.googleusercontent.com/GOWUzBsmTJpzamo6SzhVqkfKGOwtjAbp-Pk3EgVXOPC_A0tCuJy3xw848CLGWhmv7BoctD_27kSyIpbkF6CsDAd7-ddSyMB2mk32kL9lM_09hs4LbRAJSX-Yydru2N6O2D1xYAnM9YvahJTWWFaUo1pkm9Vky2IqpiBd814aeBDHWwfpR8yWt-5gjvw4qY2aQRsgiyR-GPgULuPTO4ECbAj-kkc_-CGACgYP8Rf5EoXPNEeU3txymk8uM3PIe7VxkuUw6mVzu3eO1SVuvgMIgKd18dEb8_jD5qpJynrDDl2t8VqaNzCOJTR7d8R4ADBnTwPCiM8-5vWs0P2jpAxWECaPL-fByCqft4ROXS18pGSxvMMX3Ew8MONgk9Y7xVUY38ZXyIaMoPqX9ZjAGeR1sRlR63ahbRFoRDjPJkcPh1_z121ObHZQS86g326KhgF4hxc4wrMP6XeL_8II4ZuvZ-VIxoAsakQ7iQHk0PEOv5hURH5zvotlU7wRNRcda6l1x5D9KVLfN9XVD9lzfbbFgyp9BRLCNUxO-NqFWeHxzMFoiLH8lBleR_bRpuuVPWRcTO_xv2A-rJxyaDCiwtAiJQ0qK6X7RGkv8ZrrVC9JRevsfZSf2Mg_dQY7SmG70ezEbUHQlbnmWzFrtA6xuNH-0o349PP6xOKFSihhdrKIwIjuDn-r0QOySu_1aS-6PAKJwjsF3Mg_0qd1rFtgEYD7DjHd=w360-h540-no?authuser=0",
          alt: "doctor Image",
          title: "Doctor",
          subtitle: "Action/Comedy/Thriller",
    
        }
      ];
    
    return (
        <>
          <div className="flex flex-col items-start py-4 px-4">
              <h3 className="text-gray-900 text-2xl font-bold mt-4">Recommended Movies</h3>
          </div>
          <Slider {...settings} >
          {MovieImages.map((image)=> (
              <Poster {...image}/>
          ))}
          </Slider>
        </>
    );
};

export default NewMovies;