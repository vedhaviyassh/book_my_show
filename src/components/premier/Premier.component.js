import React from "react";
import Slider from "react-slick";

import Poster from "../Poster/Poster.component";

const Premier = (props) => {
    const settings = {
        infinity: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: false,
        InitialSlide: 0
    };

    const PremierImages = [
        {
          src: "https://lh3.googleusercontent.com/kXucQrGQk3-eNrp_VLAptWPnSQ4i7pT5jtKKUrk8Gj6gKcA75orIwi6vlP-CUEbEs18gTG6MO83vJrg9e7CVz4__aPgDLSIrd7len7cnPa3sUSEETcSVhF5CSFHCyHhahg3HPsC2K4DTZ8RIAo7suWcED_Gopl_uWN-KqJO8G0wOPRzYxLiezZGwBRmy9-JjP6lvtXyCXuE1E1dlUx-EP3XkEdTdkIsolJl5eKX3shz3W5yJ1y8RLSuQZpmICZaaXAazr6wOO1whVksim0FnA2UKDbI9Zb0DboE1FJ-Ewo58vXWYxUPL5HovEMJB3EajED7ixOXJrTmA7xI0Zojbn8sJzVHcpypMowuaKJWx6GItPQUwCczkEIo-DwFo97QvoCYPN8LuOr13i07hC1FyZVwbRA33kEmO03DTy_xICG0bcFVZ5yag7HJ7nZ82M12JJECrEifWQZZ7NHHxAbRrcWk0eA6cE3Iy58gSZxWSadrIqF9DCju5wDGaxCODA_NXchXrPMbuK0KiUYVyusVN94hCy2tOp8UE2eJeIQmLjbtIcMrFcQpBo_AndiZAOnBpOH5hc11V3PUULVP3l4uOreIZTWV26q14LgVPFE8KXLvUoVsOWjqIVT4mR5FwPKJ0_tqapOJpX5q8HBcKEwtgBkZmc2MWTZfDF6oDzU-V6iQsBNdrxdCkcfnFk43iRbWOhMEY5BV2SuCqHNp-qK0ex_F5=w400-h600-no?authuser=0",
          alt: "tom & jerry img",
          title: "Tom and Jerry: Cowboy Up!",
          subtitle: "English",
    
        },
        {
          src: "https://lh3.googleusercontent.com/Jq64hiGnxfO1cwKNugM9CIiUQsQQD99XmjYrYj7n8SOE1vmOLM2EIfYO2jT7chUiMwlPvg_Uw-W9Y4pwp0kzXHWXtO4QlbvS_vVHpFkGlb7tRQlk8H5JiX_F-8dbUtcVhQ7a1DqJJGuFuYKL4j3lhy4ov7aypO4qv-I8iz_hgU7r5gAjucbqccmv58TnpKhzdalgb79bI3hA2NKf7Or1O80iWs0iCmDEy-jlANH7ySKROzM1W6u9XJFcIGP-_a4pYf_8MkqZKNJs4krwNTYnVgbth60nmn6HprIA4-w1qDzZy8ozufzUJCPgo8A_fVyDqDvh1-YiEKAB83EblI4Xn5_qRkdvTinOV8UOUkt9zI3GZ2b6rrMkeIPr3vQnd_eJkJBsLyVyWQRZU0NCijMXKyiQim8_4NrCTkRE0R_3iCS5IRMAKKk6JWr1f-NXP_UgJTbVfD-pECgGscO4pVdq9oY58YFvHoCw3sthj9QKvLPRDVXdzTrT1qdK9BuFnn2Sy6M8RDJtIkOhT5svsriRAa91YPuzNvD9Hc1UHNcvNK12RBXWRTyHCqbo3FaVfyhiGWnSRbTpDQn9wWFPj4z7UJb2Vf-JkmNamb-MvoOyvbmEly-DkJmx_t_JIkk2amasY2ct__KFaQJF-EIpIFWk9QM4uDi4_4_YyRkW97JLHL4GrU3G45bpQlYTrRVpMk0DB9aHWcEaKgm3R6ypM5WtOdbG=w400-h600-no?authuser=0",
          alt: "the high note Image",
          title: "The High Note",
          subtitle: "English",
    
        },
        {
          src: "https://lh3.googleusercontent.com/fE8VjuAbvnaH_MQQwG7q7HnJE7Bz2qjL9y__4KJRYKZBK3bNQlLQc1JlOoXVvhHc9_wqeuXUEBJ1o-u2jXficWjMjKYz_cNmTrWU7bSMJ65C9Op_nIGFRTTh1cXaNcyLqR2t-2gw-tRIqSCfqZNHAOlbfHlEcsyqh5RSO_QHdKWqmAMD6QmzlK5mTzwfSZ29XQhA6Fi9OW83rpVwVIgbHoRnorNoVrP_hsQco96pqNrzUyXPmSzZSJHDcp7e2SoBdSj6Y39HQx3sp7e0uROsnohRyDkojXKJy7rOhHype7g8SFEDhQaAngBREeqAU4S5vCIAJI_c9LVrdMSbykEBSlSlQIIFyI-9eGBn-AvGS-gyvst1xPrIvZ-JlCqpq7xQYMLcH9xCHvh3cQcR9Yi3bo55VhQyXrJ0HrDmXcWMrL2Zi67zFmBONJ44i02gbBCNsV0LV0nSCcbjQdrtC2yE5_27pWN7MRq_ha0f_ctXVnq6fOjU1yGoVKGnyxJqnHGzHxTwXYltfr4wsAHTDQcmYQ9e_uvSzBsB_ee-_w2iO7hQrakYfOw6bJRcIjlZi66RC5BzUQZ3hqUUSssGlG3hT_KzrSwDVWY00o9kcA41YHchGZqWJQpKFLMPnUkDNuVAF2Iw-sw5siSAM0AmppJ-y1R4xl-Xzc0_z_XxyZkmLWRXj60t5jJSqioRHH-pNGU9VyBEUtc1neWwKeWPcKyAlLDx=w400-h600-no?authuser=0",
          alt: "resident evil Image",
          title: "Resident Evil: Welcome To Raccoon City",
          subtitle: "English",
    
        },
        {
          src: "https://lh3.googleusercontent.com/K3R25iUytXFB3Zac0HNEMa-htPpE3v9tf3r5SR58RuJzD2eKZ_33FlaOrqbNOKOopTs6fvkAgiZYB46dw5kk4_MIODsXRbqt4wHy15zShmD6QizyARrwvMvqd2PLnam19VVRlwcoc4ZV7hghtJcbgaugLA7eC62suDkohaCtsGHbyitR3DnJIvYdP4TuZ3vzvD-pLYKEKLA-vqQKNp_00TTxqYFFbyz98jrPEezch18Ak3OZOhGpe8avFQBeKEi1ULLt1LHS7JgefzxugP--H0UEryXNjp8c-hENl0OJcn_dRVvHSj0dYA6vy2c0hZbEvp6W_zm56g5TzK3RdtCqm63WimC0y8RcETKHNOTKYREKecX2cLhcvGUBRbmZLZCmyDgKPxrddonNvKUzbIq27VHZIIMpberdlFx7FFOBDc_Nd_UeJafAUzk0MqNs8GtQP7vLZcGMPEN7U6CtOR-OXjaowULYqEW0NTT3G35MKVoJvfDX_m5-cxNopX3fboORcwaGPkOo7f28lTRxDmY-Qk7bYOcDem45EHTodk13_CkOHjoiR8bdShv4N-ukISxTbbG_lAhNflYSolnMxdI0n6tCIj7wYGzGg7rcCyq8pOU78kd_18b5_KTvvmwmkn6YvOfcRNgnetHx7JNE147TAluzdCxlwZXFNP_gZgNfIbElk1PSCj4Rpg5QGVhWbjCYRhtx55Q5UnHdPbk1gQrffacO=w400-h600-no?authuser=0",
          alt: "the calm beyond Image",
          title: "The Calm Beyond",
          subtitle: "English",
    
        },
        {
          src: "https://lh3.googleusercontent.com/XhZ7J2lUHSOGThs4H0kM5mdzE7MYeY8Hk28B8I0KRJNbcIsvmc02kaAV7azvB2SM-KTnINayXPeM2vItqJ1N9bYAvTW0PYRtYLRXYMT0ogRWUgl9l0-SSO4q8eKz5bliIDxOOTq3mxKx1C337v_3ZQLlbNwTUzLBU_4k7HTjC4BxilCuCFawBMYecdPMq9K4nG3KRasxac5P-TTBovZ8uQHe8yKL11eZl3HWTPoxEnZ-3NeABD_JoK0_oaXqx3h3im1X9JDMXEtcMguyWGhe3AYIPOHPuTusWKgw3MTUrCjzuZ2W-FaMDnsidrmCcxKsj7XoWzHQ-nYSLXUs0vjOO-VTmpwnI9YZfYYmwUeJ1gDGC5wHs82ruWgRHfis0IUxUWSSDJmGNoFcISj7Dk-3BPSYZMWP6i5-TShXOht6p7ihVaXEyKfJs20CzITy17D46YMFPJneIkaKHIDk3D_0s6moAgy2K8wHL2US1CLyZInGnxWe-hqQbBhnYmvv7d1vlK9UV6pVJWPV2YsU7O2-LyfkDJWEaOoqDAZf0vwYAZkvUkqdWXj8I3rrEvAXkmhm9JoxPiUb7hV5hAQml-qyloXtaMZSVyk1rurufodmJbzDRB8W4D83H6QF3Wdj9Ft847LnZlmmAycBl65qMbTh1Mgc-C5-hAJJSJvbkbzV0lSKmJkmZvwMwsBGdTKTRijPadWa95xueS4SeJcl_4rhPM0M=w623-h933-no?authuser=0",
          alt: "spider-man Image",
          title: "Spider-Man: No Way Home",
          subtitle: "English",
    
        },
        {
          src: "https://lh3.googleusercontent.com/myYfmpODxzzn3aACa3_RLOIteCZDQZGjeXylCG5MMPOKGrLkMhcLjLOOtYcZjm9u02WwDhOH0G-xolBzyQBuQG-OmgxW2mSxvDJWDYk6G8MuJ_TOYAK50HM_X6hzDn3rTlIM0Oim-Li7p0JWvEJnQWa5NCSv4IQwdifDky9MMKOLIyuFX1xZFdEfufx2HKzfdd7M29G6K1QPDgQvyRCJvIJCvEqkukv--ESJc6o34_aQxFlwbztux2wSg5eORUW6s-BeWBuHbX2DVBiKm92fZbqSCElDdhglLwh61iGdYRqUhL6J4w6e2iNgiO2K4ZrAVt7UNLeY2dCyazcr0ji1QaVVwWTlbIs7SXc2r0a6P3iHSfzhnlsLY56FUGkvsmCZJDdj9BM8_J88YdEdPn8kEft_I7qgEhvnzTCh2tdKBaYHVDzu6LZe27wBfWwkIDfQ0Ajoy0HCnFmlYSeVnREY6Grs4rOnkBa8RxcuwvPCxOPmNYioI0Uq3g98dr8THAoxkxo9ZQL9Bxs3iCjJfVJZRmE-wa9vGfB5TT4JR94a58A0NYm4MQX4ZYO5UbCvJ2BnQMYlKPBLGG5Pqh3dWXJyitfMoGL5QV4RWmgg5Yvv_X7wPSRcXIEy1uMRjzADKl2k7Ok8s8ihD_OOpNMrBxSbhGTw8RoYbinulUXOlh8H0GLqrlZBRbRiUqer76oxbGJSkpySZeTU8Cc7cthvVC41igTx=w400-h600-no?authuser=0",
          alt: "Halloween Image",
          title: "Halloween Kills",
          subtitle: "English",
    
        },
        {
          src: "https://lh3.googleusercontent.com/piDKgAU12iwU_JRArxKxdZ7H337062xUJyEqkaT68MQx4G5kiwvA8WRnNHZ-F_zqw8aCeSOuis49_q4vYbYrY2kAlb8H9mO5L1uu7oHETfO9r66XFGwtY4e5X6Ysr89rpaA92tYOl75vZp859RptRKipkhs4C4KeiTZnE9cPgsncnHU4lCAlNUDgqoipua-w85kBwMHG1F3nkAikQi_arunVCLUfpPmleiBG5AluleupF-ZVOgZAmsbQc4yqMZY-YV2UK1UjGYIOQo6OnR7VP0pYMVKOrywFoBeMdOOWVoQp1WSEcs9amwLCCV2GcA_QHuy8iAGBGG_LFVcyNsavm6wfzhGbQ_gmjU1NHyr02gIoC2ExvxkPQ_Du2EcBoCNSFLB0HW6lS1CWr3UepXZQ27yAipwVi3DZKYY5eAjn-WwwU42WGkxxGctsSJgkV8Q9-2arNn5i3NGFplu3hXnQ12dkuiJoRAaw_4P-AGdbxneYhmedudltlH-rpAbzO8TnifLe8LQh64zerj-HmF7uJWizyLWxCmROtGpNSZg3Kb3MTKJas7QrkqrkZn2WfS0-BYyvdcaDw6-qFWuHAgoxui8IPLA36jHrwk6AYV5kNPAsk962RD_MGTgFMSh6GuoebnJJGZUdEXy1IoF46obcJW3wrRpx3O_Nn79yeByj-E9ZfYOh_ZAy_xEV7AikIixg0qb3LUEon5kunw8wKi-xyJVk=w400-h600-no?authuser=0",
          alt: "martyrs lane Image",
          title: "Martyrs Lane",
          subtitle: "English",
    
        },
        {
          src: "https://lh3.googleusercontent.com/iJKuS7Khz_b1XCSq0t8NFLYmdnLDSE-G7IUaCDzy1BYEex0j0pAHbHenkldvyK73_p7dVu_zcXwfZ8WAG4rmRSKVRdCTuVSLh5hlNTBDZVmS0_zN_HEovjFehL3U518hZ4danWGSNrzPWQpUGUo45KhQTBBTBgL7c3Dra_TI5sXVDDpEtsVBZ8PW1R-LgFzw9b-fwnLYKoNUB7QTaug2PbCys2POCk2HaJCX1LA2ZLBT-XquHrkKmJeMGUyvOyGqi_eUMqJTTnNn-bkulgKF9_0udJCbgbhVQOKSuVz_Sjux6tU4WZHb_VH-RSrCWIYDWNCC0efgQySHfnhJV3iEwbACiwv7rkw-MH4QNkHuvikLUgvMpYMN-8TujVZtSFrywxNmides_uKcFop1v5WEMNgo9MhpFqLrjyurxj0rd8ynejD4TES95YH1ZM-pAKPNB6iun-fKHif4z6Kd94LnOfYgUDh3rSdhrZ28clTM4gpyzUPMrmBazWC4npOHhkvgcpb1syMqKIE3Ej1o26GpU0ZyeVBKB0Cg9Vu5tmszqEsZQ1e5riwNn2FPmCb8TsFBYEdhNrSi9Qop2q7zt1Rpv3OoeNplZLK5FDNLexQlnWy5Qg9DMuJswKfGkcuOua987BThbuTc1e3YiCaTzi-CjPgbTIJ83uJLE0Cg4RVtF5-pK1X8XU01Hd0GI2EK4vrjYeOL71V4TNPlPGev0nndFVT3=w400-h600-no?authuser=0",
          alt: "our friend Image",
          title: "Our Friend",
          subtitle: "English",
    
        }
      ];
    
    return (
        <>
          <div className="flex flex-col items-start gap-1 py-4 px-4">
              <h3 className="text-white text-xl font-bold">Premieres</h3>
              <h5 className="text-white text-sm">Brand New releases every friday</h5>
          </div>
          <Slider {...settings} >
          {PremierImages.map((image)=> (
              <Poster {...image} isDark/>
          ))}
          </Slider>
        </>
    );
};

export default Premier;