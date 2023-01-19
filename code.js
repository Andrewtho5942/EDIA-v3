var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["afe271cc-d4d9-41b5-b5d6-667d3f9477c6","344bc444-0c43-45c0-93ef-915cb76ff02d","3cb49619-7fbb-46ef-8cba-52ad5bb1bec9","21d9ef65-dc7e-4c56-a98a-50e1a264a9c3","013812ac-6a06-4c76-a011-d7d1ef7e69c3","46cdf2d9-30cf-42d7-95c3-5dcf5abf9b76","9ce170cc-f76f-437a-9773-a92604e08791","07667d85-ba38-4294-8ad6-b7c1ebf9d415","11058df7-043b-4ce8-be0b-3bd8dd93cf33","7b5d383d-7ebb-438f-9b84-83912ad6e961","0bc0e360-c223-4cac-8bdb-d8b34572b073","5b71bb13-a15c-4a2f-8977-1db849ad6a2d","b221ac7f-5c06-48c8-ace5-36e3fea16bed","b0322a07-75a6-4d20-9186-a3c02dd16c72","e185a48b-6d8e-400e-9563-dc9b10a69277","54f96f16-bf5b-4c84-a375-ff575427a894","b468ded5-6fc3-4690-81a3-2633ba9d465c","3f2d8dcc-81eb-4c7f-83fd-ae6238750e47","c87bb60e-0cfa-4d1b-8b51-057c9bf18736","c22fa310-11ab-4622-a250-075ea67ab5e8","cba9d44c-a88c-4c4c-9d2a-03cf52748edf","ed4c4484-6b3d-4b0b-96fa-4fd5b7c0df7e","f891f820-7b68-477f-abd8-254c858b3570","9c24e841-3955-4344-97fb-4302a3013965","8d38414a-7beb-4c30-8de2-f1b9beeac5bc","4a783641-db12-4519-9c58-b366f027921d","4a091930-13be-48e0-8a6d-86e7ee6bba62","1768fcab-d36c-47c9-a996-10940d380f79","91b48adf-61c0-4a15-a3f4-a9ca714f32dd","8bab1634-dc29-4c18-bb14-86bf3145583e","aa037579-b6f0-47f3-b34d-3fba1b5cf2ff","81f999c6-4b0b-477d-bbe1-75c6a78c9fbc","57ac1eff-9874-45fb-b941-524ec059988d","60ed7408-3f10-4648-b9d9-8e3d2efcc79c","959cb37d-3ebf-44bc-b27a-1a7247381d0b","7797797d-9e94-4258-a501-1ac851063dfa","6d111345-17f1-4027-9878-ba50dc496d8d","1eb8dd06-5dac-4668-ab60-b98b96446685","4509fffc-beb2-4581-8216-709417348b3a","34fb001c-f3e0-41a5-94f7-ab9a660bc3bb","57686bd3-f858-4b88-b62b-043b1b236f96","dc22d733-5cd0-452e-abd6-5c65d56b5c3a","cc1f8bc7-da20-4b28-b175-0da3aaab43bf","78fc0417-5634-49f8-901f-c10595d3a0b7","3fa63744-74ab-4e31-a078-578e0b0502f8","1b1b0697-29db-4b9e-acf9-b49889a51c9d","581a3cea-4243-4c43-8c47-21bc35bd2a38","41303c3e-28a4-4815-8281-42e5aa7cc9f3","e38436e9-335f-4271-aa21-b54f95dfbbe1","47c42bc3-7d1f-407c-b454-6f9abcf2d889","66529aff-5640-4236-941f-0161a985c3e9","0f233292-188a-4e31-91fb-c132b38c5c96","e8264b0c-7c62-478f-ac85-8c9df554356c","997f6bc3-6f6d-4e0a-a5dd-daeed6d16b79","56115a4d-cc98-4362-9b30-429d64b2e49c","10b40db6-b8ee-46dc-87a0-625daca0335e","67b3c9ff-c5d5-459d-b670-b3314dc66e1f","c3be3c5e-a260-4770-8d1c-f3247e8505e8","6e0f15ae-6c22-4f45-ad08-3a149afe8ad2","3f422943-4072-440c-8383-1ddad6546b92","f188ca71-fb2d-42df-8bb7-4e7c8dae1429","57c1b732-5ae1-449a-bd03-748f0c47101b","c8d281e1-d153-4f27-b3b8-9a2ed8646dc3","76d5c142-b0a8-4221-a7cb-570b1d6b1b33","3f46ff53-d686-4b42-809d-7cb2df98c9a2","a210b375-016a-4cae-8ae9-476cbdc6e244","6b9cddf6-02cf-4015-986d-62dc16405721","1a3050dd-1e66-4558-97aa-3398e475721e","9283dce9-cd19-47e2-a2cc-939574ea532e","f59a14fe-5327-46ab-a95b-ff37efd6583f","bf60c54a-0e6c-49bb-9808-0f565532e574","5648a8bb-2a30-4d51-99a7-99ec5694e595","336cbdfe-16f6-4da2-99cd-29df7a15ade2","d1ee625e-cada-4389-835f-6b473661cd8a","84f5d2cd-3141-481a-8198-d6fe5bb5d124","00730915-9ffd-4517-bc1c-3d2840d40606","359d12aa-b0cd-4269-8558-ac2bd552794a","db636b16-4156-430b-b6ac-fec18425dfc0","8398c1f7-5cf1-4977-b062-28d1b6148424","fe93544e-ff85-45f4-b780-12c2e292f58d","6879e917-d6e1-4071-8977-cdfcbf20ddf5","8a8a4c43-a2db-4403-8c6e-b0c920f9517c","9e8e9360-7d40-4ec1-ad49-64158811912d","21e97009-4c8f-49be-aace-581088d18055","65b0bac4-a883-4a4f-b52b-c388936df244","cd7cacac-28a8-489a-bdce-a45ae6767c67","b9cc961e-0cec-4b0c-8091-211d1c0a9e1a","109eb801-755a-4d7a-b70f-34e791d9ac2e","e0ac0681-e52a-40c9-88f5-75252ce16fe9"],"propsByKey":{"afe271cc-d4d9-41b5-b5d6-667d3f9477c6":{"name":"leftUp","sourceUrl":null,"frameSize":{"x":240,"y":384},"frameCount":1,"looping":true,"frameDelay":12,"version":"oQ9zmOIZ82WXO8aVxbGeFQjU_wQw.Kfx","loadedFromSource":true,"saved":true,"sourceSize":{"x":240,"y":384},"rootRelativePath":"assets/afe271cc-d4d9-41b5-b5d6-667d3f9477c6.png"},"344bc444-0c43-45c0-93ef-915cb76ff02d":{"name":"leftSide","sourceUrl":null,"frameSize":{"x":384,"y":240},"frameCount":1,"looping":true,"frameDelay":12,"version":"l.42IRY.1w2_sNntwKuJ3dlX7rGTx4Tk","loadedFromSource":true,"saved":true,"sourceSize":{"x":384,"y":240},"rootRelativePath":"assets/344bc444-0c43-45c0-93ef-915cb76ff02d.png"},"3cb49619-7fbb-46ef-8cba-52ad5bb1bec9":{"name":"leftWalkUp","sourceUrl":null,"frameSize":{"x":240,"y":392},"frameCount":7,"looping":true,"frameDelay":2,"version":"zq5ay7vg6yPWAdJzfTwwpUCOUvgz_Ybu","loadedFromSource":true,"saved":true,"sourceSize":{"x":720,"y":1176},"rootRelativePath":"assets/3cb49619-7fbb-46ef-8cba-52ad5bb1bec9.png"},"21d9ef65-dc7e-4c56-a98a-50e1a264a9c3":{"name":"leftRunUp","sourceUrl":null,"frameSize":{"x":240,"y":392},"frameCount":7,"looping":true,"frameDelay":1,"version":"53SobDomsCjX0.7mQ6.C2LEWgrvadeY4","loadedFromSource":true,"saved":true,"sourceSize":{"x":720,"y":1176},"rootRelativePath":"assets/21d9ef65-dc7e-4c56-a98a-50e1a264a9c3.png"},"013812ac-6a06-4c76-a011-d7d1ef7e69c3":{"name":"leftDown","sourceUrl":null,"frameSize":{"x":240,"y":392},"frameCount":1,"looping":true,"frameDelay":12,"version":"4t07XFgyqSVu09a63iwC0iB42QtLLpM7","loadedFromSource":true,"saved":true,"sourceSize":{"x":240,"y":392},"rootRelativePath":"assets/013812ac-6a06-4c76-a011-d7d1ef7e69c3.png"},"46cdf2d9-30cf-42d7-95c3-5dcf5abf9b76":{"name":"leftWalkDown","sourceUrl":null,"frameSize":{"x":240,"y":400},"frameCount":7,"looping":true,"frameDelay":2,"version":"_bopXwYxWzTIV7WWeofsvY1yATqOisOG","loadedFromSource":true,"saved":true,"sourceSize":{"x":720,"y":1200},"rootRelativePath":"assets/46cdf2d9-30cf-42d7-95c3-5dcf5abf9b76.png"},"9ce170cc-f76f-437a-9773-a92604e08791":{"name":"leftRunDown","sourceUrl":null,"frameSize":{"x":240,"y":400},"frameCount":7,"looping":true,"frameDelay":1,"version":"AXNOdW6gbcCj8D.l1t6dzacbpPuhIOKV","loadedFromSource":true,"saved":true,"sourceSize":{"x":720,"y":1200},"rootRelativePath":"assets/9ce170cc-f76f-437a-9773-a92604e08791.png"},"07667d85-ba38-4294-8ad6-b7c1ebf9d415":{"name":"leftRight","sourceUrl":null,"frameSize":{"x":168,"y":384},"frameCount":1,"looping":true,"frameDelay":12,"version":"yjElbfOXKZg1brV.4cp.2IZQ5PQMwiup","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":384},"rootRelativePath":"assets/07667d85-ba38-4294-8ad6-b7c1ebf9d415.png"},"11058df7-043b-4ce8-be0b-3bd8dd93cf33":{"name":"leftWalkRight","sourceUrl":null,"frameSize":{"x":232,"y":384},"frameCount":8,"looping":true,"frameDelay":2,"version":"Qh7xay1NzAAkAf_IS1racPTE39XhFQ0k","loadedFromSource":true,"saved":true,"sourceSize":{"x":928,"y":768},"rootRelativePath":"assets/11058df7-043b-4ce8-be0b-3bd8dd93cf33.png"},"7b5d383d-7ebb-438f-9b84-83912ad6e961":{"name":"leftRunRight","sourceUrl":null,"frameSize":{"x":232,"y":384},"frameCount":8,"looping":true,"frameDelay":1,"version":"B9KObRNgliZneAFEfnXmoLLWa.vGQ2RJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":928,"y":768},"rootRelativePath":"assets/7b5d383d-7ebb-438f-9b84-83912ad6e961.png"},"0bc0e360-c223-4cac-8bdb-d8b34572b073":{"name":"leftLeft","sourceUrl":null,"frameSize":{"x":216,"y":384},"frameCount":1,"looping":true,"frameDelay":12,"version":"l196_ZAFxozVCtf3Spcqmaei3n5hhr6D","loadedFromSource":true,"saved":true,"sourceSize":{"x":216,"y":384},"rootRelativePath":"assets/0bc0e360-c223-4cac-8bdb-d8b34572b073.png"},"5b71bb13-a15c-4a2f-8977-1db849ad6a2d":{"name":"leftWalkLeft","sourceUrl":null,"frameSize":{"x":248,"y":384},"frameCount":7,"looping":true,"frameDelay":2,"version":"1elXuR8_IsNa.cKIhAImy4C2dqwqrkGn","loadedFromSource":true,"saved":true,"sourceSize":{"x":744,"y":1152},"rootRelativePath":"assets/5b71bb13-a15c-4a2f-8977-1db849ad6a2d.png"},"b221ac7f-5c06-48c8-ace5-36e3fea16bed":{"name":"leftRunLeft","sourceUrl":null,"frameSize":{"x":248,"y":384},"frameCount":7,"looping":true,"frameDelay":1,"version":"rpBv5jXlBKcVb58WXUfTQSy9uyo4t35f","loadedFromSource":true,"saved":true,"sourceSize":{"x":744,"y":1152},"rootRelativePath":"assets/b221ac7f-5c06-48c8-ace5-36e3fea16bed.png"},"b0322a07-75a6-4d20-9186-a3c02dd16c72":{"name":"rightDown","sourceUrl":null,"frameSize":{"x":224,"y":376},"frameCount":1,"looping":true,"frameDelay":12,"version":"UuU4MdxR78cwnJb_S1SXTeKKnyGLZlm6","loadedFromSource":true,"saved":true,"sourceSize":{"x":224,"y":376},"rootRelativePath":"assets/b0322a07-75a6-4d20-9186-a3c02dd16c72.png"},"e185a48b-6d8e-400e-9563-dc9b10a69277":{"name":"rightWalkDown","sourceUrl":null,"frameSize":{"x":224,"y":400},"frameCount":8,"looping":true,"frameDelay":2,"version":"7doQcZpnagJqZ4Q1wtkjMn3rL7uO3O1T","loadedFromSource":true,"saved":true,"sourceSize":{"x":896,"y":800},"rootRelativePath":"assets/e185a48b-6d8e-400e-9563-dc9b10a69277.png"},"54f96f16-bf5b-4c84-a375-ff575427a894":{"name":"rightRunDown","sourceUrl":null,"frameSize":{"x":224,"y":400},"frameCount":8,"looping":true,"frameDelay":1,"version":"goUitErwosgIgR_FL_EXMzVu8Oc.zBf4","loadedFromSource":true,"saved":true,"sourceSize":{"x":896,"y":800},"rootRelativePath":"assets/54f96f16-bf5b-4c84-a375-ff575427a894.png"},"b468ded5-6fc3-4690-81a3-2633ba9d465c":{"name":"rightLeft","sourceUrl":null,"frameSize":{"x":200,"y":376},"frameCount":1,"looping":true,"frameDelay":12,"version":"XXzfwp3yj86oKN0H5AjfrvqzSVeUCLo8","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":376},"rootRelativePath":"assets/b468ded5-6fc3-4690-81a3-2633ba9d465c.png"},"3f2d8dcc-81eb-4c7f-83fd-ae6238750e47":{"name":"rightWalkLeft","sourceUrl":null,"frameSize":{"x":224,"y":376},"frameCount":8,"looping":true,"frameDelay":2,"version":"NDf7y4fCfsxNl9hpNFiJ.kcH9fnw3so3","loadedFromSource":true,"saved":true,"sourceSize":{"x":896,"y":752},"rootRelativePath":"assets/3f2d8dcc-81eb-4c7f-83fd-ae6238750e47.png"},"c87bb60e-0cfa-4d1b-8b51-057c9bf18736":{"name":"rightRunLeft","sourceUrl":null,"frameSize":{"x":224,"y":376},"frameCount":8,"looping":true,"frameDelay":2,"version":"fcONfbCdLn8ZeO1YA2BK2wQSIW_CkQTX","loadedFromSource":true,"saved":true,"sourceSize":{"x":896,"y":752},"rootRelativePath":"assets/c87bb60e-0cfa-4d1b-8b51-057c9bf18736.png"},"c22fa310-11ab-4622-a250-075ea67ab5e8":{"name":"rightRight","sourceUrl":null,"frameSize":{"x":200,"y":376},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ou98WTWC4itAUtPo2hbdBUrG1Ax39D03","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":376},"rootRelativePath":"assets/c22fa310-11ab-4622-a250-075ea67ab5e8.png"},"cba9d44c-a88c-4c4c-9d2a-03cf52748edf":{"name":"rightWalkRight","sourceUrl":null,"frameSize":{"x":216,"y":376},"frameCount":8,"looping":true,"frameDelay":2,"version":"A2KAN2CHXIKSzSpNn8jd4JdnAXTmM2FY","loadedFromSource":true,"saved":true,"sourceSize":{"x":864,"y":752},"rootRelativePath":"assets/cba9d44c-a88c-4c4c-9d2a-03cf52748edf.png"},"ed4c4484-6b3d-4b0b-96fa-4fd5b7c0df7e":{"name":"rightRunRight","sourceUrl":null,"frameSize":{"x":216,"y":376},"frameCount":8,"looping":true,"frameDelay":1,"version":"U1LF4jO0SwHZUll.B1zHxUUYg_USNao5","loadedFromSource":true,"saved":true,"sourceSize":{"x":864,"y":752},"rootRelativePath":"assets/ed4c4484-6b3d-4b0b-96fa-4fd5b7c0df7e.png"},"f891f820-7b68-477f-abd8-254c858b3570":{"name":"rightUp","sourceUrl":null,"frameSize":{"x":224,"y":384},"frameCount":1,"looping":true,"frameDelay":12,"version":"cB_aEjjjQsxJw9gfu9aeHozqyZ4rs7ho","loadedFromSource":true,"saved":true,"sourceSize":{"x":224,"y":384},"rootRelativePath":"assets/f891f820-7b68-477f-abd8-254c858b3570.png"},"9c24e841-3955-4344-97fb-4302a3013965":{"name":"rightSide","sourceUrl":null,"frameSize":{"x":384,"y":224},"frameCount":1,"looping":true,"frameDelay":12,"version":"GTVNKCQJDBqAd.bHJcSuG_6o7ArfR5mt","loadedFromSource":true,"saved":true,"sourceSize":{"x":384,"y":224},"rootRelativePath":"assets/9c24e841-3955-4344-97fb-4302a3013965.png"},"8d38414a-7beb-4c30-8de2-f1b9beeac5bc":{"name":"rightWalkUp","sourceUrl":null,"frameSize":{"x":224,"y":392},"frameCount":8,"looping":true,"frameDelay":2,"version":"6gjVXCsXCcQPSqVdC.FoOgqESEnssWdx","loadedFromSource":true,"saved":true,"sourceSize":{"x":896,"y":784},"rootRelativePath":"assets/8d38414a-7beb-4c30-8de2-f1b9beeac5bc.png"},"4a783641-db12-4519-9c58-b366f027921d":{"name":"rightRunUp","sourceUrl":null,"frameSize":{"x":224,"y":392},"frameCount":8,"looping":true,"frameDelay":1,"version":"UzRPRoZhl8Cx4uxDH0dL6QLmHOB3xs4R","loadedFromSource":true,"saved":true,"sourceSize":{"x":896,"y":784},"rootRelativePath":"assets/4a783641-db12-4519-9c58-b366f027921d.png"},"4a091930-13be-48e0-8a6d-86e7ee6bba62":{"name":"noSign","sourceUrl":null,"frameSize":{"x":450,"y":448},"frameCount":1,"looping":true,"frameDelay":12,"version":"AQYQVCtBpJP1c16qWChuf9PyGTrIAuaX","loadedFromSource":true,"saved":true,"sourceSize":{"x":450,"y":448},"rootRelativePath":"assets/4a091930-13be-48e0-8a6d-86e7ee6bba62.png"},"1768fcab-d36c-47c9-a996-10940d380f79":{"name":"book","sourceUrl":null,"frameSize":{"x":304,"y":226},"frameCount":1,"looping":true,"frameDelay":12,"version":"simtIFiUFy2fM7IZGXcUMkAc18Tmst3K","loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":226},"rootRelativePath":"assets/1768fcab-d36c-47c9-a996-10940d380f79.png"},"91b48adf-61c0-4a15-a3f4-a9ca714f32dd":{"name":"gradHat","sourceUrl":null,"frameSize":{"x":934,"y":578},"frameCount":1,"looping":true,"frameDelay":12,"version":"THCR3cQLxQgkgT1xjtVw7b9g22zRy93r","loadedFromSource":true,"saved":true,"sourceSize":{"x":934,"y":578},"rootRelativePath":"assets/91b48adf-61c0-4a15-a3f4-a9ca714f32dd.png"},"8bab1634-dc29-4c18-bb14-86bf3145583e":{"name":"dollar","sourceUrl":null,"frameSize":{"x":622,"y":958},"frameCount":1,"looping":true,"frameDelay":12,"version":"nmxVgdMwYdpEHCjviFsArqquSPLmJa9z","loadedFromSource":true,"saved":true,"sourceSize":{"x":622,"y":958},"rootRelativePath":"assets/8bab1634-dc29-4c18-bb14-86bf3145583e.png"},"aa037579-b6f0-47f3-b34d-3fba1b5cf2ff":{"name":"streetVert2","sourceUrl":null,"frameSize":{"x":56,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"QqpMUK_00II6qn8I1Vs_WjLGNbPDRsmm","loadedFromSource":true,"saved":true,"sourceSize":{"x":56,"y":64},"rootRelativePath":"assets/aa037579-b6f0-47f3-b34d-3fba1b5cf2ff.png"},"81f999c6-4b0b-477d-bbe1-75c6a78c9fbc":{"name":"streetVertCon","sourceUrl":null,"frameSize":{"x":56,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"zZujPPSpVMM5fSwtBn.H0Zl6zsaCJuOh","loadedFromSource":true,"saved":true,"sourceSize":{"x":56,"y":64},"rootRelativePath":"assets/81f999c6-4b0b-477d-bbe1-75c6a78c9fbc.png"},"57ac1eff-9874-45fb-b941-524ec059988d":{"name":"bridgeVert2","sourceUrl":null,"frameSize":{"x":46,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"O3CKsnx2qSxHonmR8Z_p58fyRfXr0Fhu","loadedFromSource":true,"saved":true,"sourceSize":{"x":46,"y":64},"rootRelativePath":"assets/57ac1eff-9874-45fb-b941-524ec059988d.png"},"60ed7408-3f10-4648-b9d9-8e3d2efcc79c":{"name":"bridgeVertCon","sourceUrl":null,"frameSize":{"x":46,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"6.Mc9K7tT08vHvRoVwCBCbj2um8lIl8S","loadedFromSource":true,"saved":true,"sourceSize":{"x":46,"y":64},"rootRelativePath":"assets/60ed7408-3f10-4648-b9d9-8e3d2efcc79c.png"},"959cb37d-3ebf-44bc-b27a-1a7247381d0b":{"name":"streetHoriz2","sourceUrl":null,"frameSize":{"x":64,"y":56},"frameCount":1,"looping":true,"frameDelay":12,"version":"I0vrLOje9T.UuvUHfdjjJ7SvAhWgrpvz","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":56},"rootRelativePath":"assets/959cb37d-3ebf-44bc-b27a-1a7247381d0b.png"},"7797797d-9e94-4258-a501-1ac851063dfa":{"name":"streetHorizCon","sourceUrl":null,"frameSize":{"x":64,"y":56},"frameCount":1,"looping":true,"frameDelay":12,"version":"GJe2Akw9S8YFsiff2v2y5RJleePL7OeR","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":56},"rootRelativePath":"assets/7797797d-9e94-4258-a501-1ac851063dfa.png"},"6d111345-17f1-4027-9878-ba50dc496d8d":{"name":"streetVert1","sourceUrl":null,"frameSize":{"x":66,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"UutbL7PA3votSXwL4Mim_glJ4CBABw8b","loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":64},"rootRelativePath":"assets/6d111345-17f1-4027-9878-ba50dc496d8d.png"},"1eb8dd06-5dac-4668-ab60-b98b96446685":{"name":"streetVert3","sourceUrl":null,"frameSize":{"x":66,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"F.YvpV0BDp79n2gAgG7t9Ia07QUqrG1U","loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":64},"rootRelativePath":"assets/1eb8dd06-5dac-4668-ab60-b98b96446685.png"},"4509fffc-beb2-4581-8216-709417348b3a":{"name":"streetVert4","sourceUrl":null,"frameSize":{"x":66,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"N_6A5j8ISXIhrSE5G9rg9ZSw1HsZYsYp","loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":64},"rootRelativePath":"assets/4509fffc-beb2-4581-8216-709417348b3a.png"},"34fb001c-f3e0-41a5-94f7-ab9a660bc3bb":{"name":"bridgeVert1","sourceUrl":null,"frameSize":{"x":46,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"ziYciSt6wwYvkmLFPuqTS4tnbiNskyjC","loadedFromSource":true,"saved":true,"sourceSize":{"x":46,"y":64},"rootRelativePath":"assets/34fb001c-f3e0-41a5-94f7-ab9a660bc3bb.png"},"57686bd3-f858-4b88-b62b-043b1b236f96":{"name":"streetHoriz1","sourceUrl":null,"frameSize":{"x":58,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ham31MrXS3HFamAAlkRk2phcm8KkxUit","loadedFromSource":true,"saved":true,"sourceSize":{"x":58,"y":70},"rootRelativePath":"assets/57686bd3-f858-4b88-b62b-043b1b236f96.png"},"dc22d733-5cd0-452e-abd6-5c65d56b5c3a":{"name":"streetHWay","sourceUrl":null,"frameSize":{"x":58,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"QUV5FHHc5L8k9fFFh3WO_IxjkYdIHOcT","loadedFromSource":true,"saved":true,"sourceSize":{"x":58,"y":60},"rootRelativePath":"assets/dc22d733-5cd0-452e-abd6-5c65d56b5c3a.png"},"cc1f8bc7-da20-4b28-b175-0da3aaab43bf":{"name":"intersectionRight1","sourceUrl":null,"frameSize":{"x":56,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"T4t_yDeIJcDcAkNsKn9i6unCkNIt6mDS","loadedFromSource":true,"saved":true,"sourceSize":{"x":56,"y":64},"rootRelativePath":"assets/cc1f8bc7-da20-4b28-b175-0da3aaab43bf.png"},"78fc0417-5634-49f8-901f-c10595d3a0b7":{"name":"intersectionRightCon","sourceUrl":null,"frameSize":{"x":56,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"jFjVp1S_jBXwnnu1LQidx9Mtv_JJ_ST8","loadedFromSource":true,"saved":true,"sourceSize":{"x":56,"y":64},"rootRelativePath":"assets/78fc0417-5634-49f8-901f-c10595d3a0b7.png"},"3fa63744-74ab-4e31-a078-578e0b0502f8":{"name":"intersectionRight2","sourceUrl":null,"frameSize":{"x":56,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"v20pKcit9p4di.dS9q0vtpgC7wpCY2Mp","loadedFromSource":true,"saved":true,"sourceSize":{"x":56,"y":64},"rootRelativePath":"assets/3fa63744-74ab-4e31-a078-578e0b0502f8.png"},"1b1b0697-29db-4b9e-acf9-b49889a51c9d":{"name":"intersectionLeft2","sourceUrl":null,"frameSize":{"x":56,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"oU2_LCu1RyAko51EelXawNmPPFnrqYPi","loadedFromSource":true,"saved":true,"sourceSize":{"x":56,"y":64},"rootRelativePath":"assets/1b1b0697-29db-4b9e-acf9-b49889a51c9d.png"},"581a3cea-4243-4c43-8c47-21bc35bd2a38":{"name":"intersectionLeftCon","sourceUrl":null,"frameSize":{"x":56,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"pyoc194ykej5EIq_ROdD_JHAAsL2KXca","loadedFromSource":true,"saved":true,"sourceSize":{"x":56,"y":64},"rootRelativePath":"assets/581a3cea-4243-4c43-8c47-21bc35bd2a38.png"},"41303c3e-28a4-4815-8281-42e5aa7cc9f3":{"name":"intersectionLeft1","sourceUrl":null,"frameSize":{"x":56,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"CYXtY8FIMiD8NDetiiJSDcxrg1HWmESM","loadedFromSource":true,"saved":true,"sourceSize":{"x":56,"y":64},"rootRelativePath":"assets/41303c3e-28a4-4815-8281-42e5aa7cc9f3.png"},"e38436e9-335f-4271-aa21-b54f95dfbbe1":{"name":"t1BuildingSide","sourceUrl":null,"frameSize":{"x":82,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"d6Lr0qkCD8LaeGufYt93xgb7a.NjFfWL","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":60},"rootRelativePath":"assets/e38436e9-335f-4271-aa21-b54f95dfbbe1.png"},"47c42bc3-7d1f-407c-b454-6f9abcf2d889":{"name":"t1BuildingRuin","sourceUrl":null,"frameSize":{"x":82,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"8kEtF5ozc65.cpbmxPnYtj4tFFqUm0n3","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":60},"rootRelativePath":"assets/47c42bc3-7d1f-407c-b454-6f9abcf2d889.png"},"66529aff-5640-4236-941f-0161a985c3e9":{"name":"t1FenceRuin","sourceUrl":null,"frameSize":{"x":82,"y":140},"frameCount":1,"looping":true,"frameDelay":12,"version":"blYfHlqHKcJdZl.6XBefpsQoa69AhjiW","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":140},"rootRelativePath":"assets/66529aff-5640-4236-941f-0161a985c3e9.png"},"0f233292-188a-4e31-91fb-c132b38c5c96":{"name":"t2FenceRuin","sourceUrl":null,"frameSize":{"x":162,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"Jo3Q_M9RKFreGaOsufgO_nTUkUpFi6.1","loadedFromSource":true,"saved":true,"sourceSize":{"x":162,"y":94},"rootRelativePath":"assets/0f233292-188a-4e31-91fb-c132b38c5c96.png"},"e8264b0c-7c62-478f-ac85-8c9df554356c":{"name":"t3FenceRuin","sourceUrl":null,"frameSize":{"x":230,"y":160},"frameCount":1,"looping":true,"frameDelay":12,"version":"kYaMk0rSpvEvPorVTa8xwVtuJ0ypS.Xv","loadedFromSource":true,"saved":true,"sourceSize":{"x":230,"y":160},"rootRelativePath":"assets/e8264b0c-7c62-478f-ac85-8c9df554356c.png"},"997f6bc3-6f6d-4e0a-a5dd-daeed6d16b79":{"name":"t1BuildingSide1","sourceUrl":null,"frameSize":{"x":82,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"OaHfgc_9phLD0SZ9Y9Riy1v1lKFybcbY","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":60},"rootRelativePath":"assets/997f6bc3-6f6d-4e0a-a5dd-daeed6d16b79.png"},"56115a4d-cc98-4362-9b30-429d64b2e49c":{"name":"t2BuildingRuin","sourceUrl":null,"frameSize":{"x":178,"y":220},"frameCount":1,"looping":true,"frameDelay":12,"version":"jFNJ43KE2senLzjipE7fRWYodmmA8W6F","loadedFromSource":true,"saved":true,"sourceSize":{"x":178,"y":220},"rootRelativePath":"assets/56115a4d-cc98-4362-9b30-429d64b2e49c.png"},"10b40db6-b8ee-46dc-87a0-625daca0335e":{"name":"t2BuildingSide","sourceUrl":null,"frameSize":{"x":178,"y":220},"frameCount":6,"looping":true,"frameDelay":12,"version":"qHvzpOYxmrwY8T4oj7yU7sXw6gG.bUR_","loadedFromSource":true,"saved":true,"sourceSize":{"x":534,"y":440},"rootRelativePath":"assets/10b40db6-b8ee-46dc-87a0-625daca0335e.png"},"67b3c9ff-c5d5-459d-b670-b3314dc66e1f":{"name":"t2BuildingSide4","sourceUrl":null,"frameSize":{"x":178,"y":220},"frameCount":6,"looping":true,"frameDelay":12,"version":"j8o4Tg5P3sSmrlQULluyaEo.5BomHzsS","loadedFromSource":true,"saved":true,"sourceSize":{"x":534,"y":440},"rootRelativePath":"assets/67b3c9ff-c5d5-459d-b670-b3314dc66e1f.png"},"c3be3c5e-a260-4770-8d1c-f3247e8505e8":{"name":"t2BuildingSide2","sourceUrl":null,"frameSize":{"x":168,"y":96},"frameCount":1,"looping":true,"frameDelay":12,"version":"oTu04WAWTHw1Ejvun_jr2BURw885KqAS","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":96},"rootRelativePath":"assets/c3be3c5e-a260-4770-8d1c-f3247e8505e8.png"},"6e0f15ae-6c22-4f45-ad08-3a149afe8ad2":{"name":"t2BuildingSide1","sourceUrl":null,"frameSize":{"x":168,"y":96},"frameCount":1,"looping":true,"frameDelay":12,"version":"IHRtJK4wEoi_xhtXSecw6ka6eJB2AKud","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":96},"rootRelativePath":"assets/6e0f15ae-6c22-4f45-ad08-3a149afe8ad2.png"},"3f422943-4072-440c-8383-1ddad6546b92":{"name":"t2BuildingSide3","sourceUrl":null,"frameSize":{"x":168,"y":96},"frameCount":1,"looping":true,"frameDelay":12,"version":"kBRlNay2ArfjG3uvNJaihamH8SkiYgYK","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":96},"rootRelativePath":"assets/3f422943-4072-440c-8383-1ddad6546b92.png"},"f188ca71-fb2d-42df-8bb7-4e7c8dae1429":{"name":"t3BuildingSide","sourceUrl":null,"frameSize":{"x":242,"y":170},"frameCount":1,"looping":true,"frameDelay":12,"version":"K37vEu7ys61lD1Pqkk1RDgetGaxfU0ao","loadedFromSource":true,"saved":true,"sourceSize":{"x":242,"y":170},"rootRelativePath":"assets/f188ca71-fb2d-42df-8bb7-4e7c8dae1429.png"},"57c1b732-5ae1-449a-bd03-748f0c47101b":{"name":"t3BuildingRuin","sourceUrl":null,"frameSize":{"x":242,"y":170},"frameCount":1,"looping":true,"frameDelay":12,"version":"oc346RYF5jNI7aE7wQ.wbJzsIM7KE1LK","loadedFromSource":true,"saved":true,"sourceSize":{"x":242,"y":170},"rootRelativePath":"assets/57c1b732-5ae1-449a-bd03-748f0c47101b.png"},"c8d281e1-d153-4f27-b3b8-9a2ed8646dc3":{"name":"t3BuildingSide1","sourceUrl":null,"frameSize":{"x":86,"y":72},"frameCount":1,"looping":true,"frameDelay":12,"version":"517kEu7mBXMH2Cgbu8HPrZKctvXH7xLD","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":72},"rootRelativePath":"assets/c8d281e1-d153-4f27-b3b8-9a2ed8646dc3.png"},"76d5c142-b0a8-4221-a7cb-570b1d6b1b33":{"name":"t3BuildingRuin1","sourceUrl":null,"frameSize":{"x":86,"y":72},"frameCount":1,"looping":true,"frameDelay":12,"version":"GME5ipwCVdNXOBN8S2KTM9xEynWOFzmP","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":72},"rootRelativePath":"assets/76d5c142-b0a8-4221-a7cb-570b1d6b1b33.png"},"3f46ff53-d686-4b42-809d-7cb2df98c9a2":{"name":"CESJ","sourceUrl":null,"frameSize":{"x":1060,"y":672},"frameCount":1,"looping":true,"frameDelay":12,"version":"41aZx7OV3xgUtyGs237WLO4EFB4hjoI6","loadedFromSource":true,"saved":true,"sourceSize":{"x":1060,"y":672},"rootRelativePath":"assets/3f46ff53-d686-4b42-809d-7cb2df98c9a2.png"},"a210b375-016a-4cae-8ae9-476cbdc6e244":{"name":"carRight","sourceUrl":null,"frameSize":{"x":244,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"wZkI3J72xAX7n3_tLW2x91j81N1U3tJ8","loadedFromSource":true,"saved":true,"sourceSize":{"x":244,"y":120},"rootRelativePath":"assets/a210b375-016a-4cae-8ae9-476cbdc6e244.png"},"6b9cddf6-02cf-4015-986d-62dc16405721":{"name":"carLeft","sourceUrl":null,"frameSize":{"x":244,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"wxOtTgNEp._d..MIufrj6FBNEGjYSMuB","loadedFromSource":true,"saved":true,"sourceSize":{"x":244,"y":120},"rootRelativePath":"assets/6b9cddf6-02cf-4015-986d-62dc16405721.png"},"1a3050dd-1e66-4558-97aa-3398e475721e":{"name":"groupIcon","sourceUrl":null,"frameSize":{"x":800,"y":800},"frameCount":1,"looping":true,"frameDelay":12,"version":"5.m0_MLXqURWpPj7OmCrRJq2baXrRHSh","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/1a3050dd-1e66-4558-97aa-3398e475721e.png"},"9283dce9-cd19-47e2-a2cc-939574ea532e":{"name":"offer.png","sourceUrl":null,"frameSize":{"x":140,"y":140},"frameCount":1,"looping":true,"frameDelay":12,"version":"hRvCaoHpNNzNvgpwlL1oGMD3mlXNpDR_","loadedFromSource":true,"saved":true,"sourceSize":{"x":140,"y":140},"rootRelativePath":"assets/9283dce9-cd19-47e2-a2cc-939574ea532e.png"},"f59a14fe-5327-46ab-a95b-ff37efd6583f":{"name":"construction","sourceUrl":null,"frameSize":{"x":120,"y":105},"frameCount":1,"looping":true,"frameDelay":12,"version":"AmR_Lr6jmiNHT7aCCwSfEE.dtYTd4sfY","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":105},"rootRelativePath":"assets/f59a14fe-5327-46ab-a95b-ff37efd6583f.png"},"bf60c54a-0e6c-49bb-9808-0f565532e574":{"name":"check","sourceUrl":null,"frameSize":{"x":469,"y":471},"frameCount":1,"looping":true,"frameDelay":12,"version":"n0kxXn_AbEuBvUXB8AHdfb5Q6tmzhvYq","loadedFromSource":true,"saved":true,"sourceSize":{"x":469,"y":471},"rootRelativePath":"assets/bf60c54a-0e6c-49bb-9808-0f565532e574.png"},"5648a8bb-2a30-4d51-99a7-99ec5694e595":{"name":"t3Alleyway1","sourceUrl":null,"frameSize":{"x":25,"y":66},"frameCount":1,"looping":true,"frameDelay":12,"version":"14W5yy7vfZpdbjd2bREFflN4A6QW5xJf","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":66},"rootRelativePath":"assets/5648a8bb-2a30-4d51-99a7-99ec5694e595.png"},"336cbdfe-16f6-4da2-99cd-29df7a15ade2":{"name":"t3Alleyway2","sourceUrl":null,"frameSize":{"x":25,"y":66},"frameCount":1,"looping":true,"frameDelay":12,"version":"WtHTMEi21PHICNgfh6fYF3Tpe6Zk6BRL","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":66},"rootRelativePath":"assets/336cbdfe-16f6-4da2-99cd-29df7a15ade2.png"},"d1ee625e-cada-4389-835f-6b473661cd8a":{"name":"t3Park1","sourceUrl":null,"frameSize":{"x":248,"y":78},"frameCount":1,"looping":true,"frameDelay":12,"version":"n8N5HCds1gsFOAnktqIgANQm1RGroYNM","loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":78},"rootRelativePath":"assets/d1ee625e-cada-4389-835f-6b473661cd8a.png"},"84f5d2cd-3141-481a-8198-d6fe5bb5d124":{"name":"t3Park2","sourceUrl":null,"frameSize":{"x":248,"y":58},"frameCount":1,"looping":true,"frameDelay":12,"version":"A28WjfocBzpOaekivXbL4W8zCz.ho6yv","loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":58},"rootRelativePath":"assets/84f5d2cd-3141-481a-8198-d6fe5bb5d124.png"},"00730915-9ffd-4517-bc1c-3d2840d40606":{"name":"river","sourceUrl":null,"frameSize":{"x":780,"y":64},"frameCount":3,"looping":true,"frameDelay":15,"version":".hzIU.WcX6igfOxVQJMbbk1KQml_AoSO","loadedFromSource":true,"saved":true,"sourceSize":{"x":780,"y":192},"rootRelativePath":"assets/00730915-9ffd-4517-bc1c-3d2840d40606.png"},"359d12aa-b0cd-4269-8558-ac2bd552794a":{"name":"park1","sourceUrl":null,"frameSize":{"x":100,"y":106},"frameCount":1,"looping":true,"frameDelay":12,"version":"dZ1Z2g0gvtpvkwVYf9nMJSITF3zi9Jfa","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":106},"rootRelativePath":"assets/359d12aa-b0cd-4269-8558-ac2bd552794a.png"},"db636b16-4156-430b-b6ac-fec18425dfc0":{"name":"park2","sourceUrl":null,"frameSize":{"x":100,"y":86},"frameCount":1,"looping":true,"frameDelay":12,"version":"4cB340Xadt9UUPMpo1alUWmEt1LKpoz3","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":86},"rootRelativePath":"assets/db636b16-4156-430b-b6ac-fec18425dfc0.png"},"8398c1f7-5cf1-4977-b062-28d1b6148424":{"name":"t1Park1","sourceUrl":null,"frameSize":{"x":82,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"kGy7jnH8Qk11wWaMK9H6F6lRZWEujxGn","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":80},"rootRelativePath":"assets/8398c1f7-5cf1-4977-b062-28d1b6148424.png"},"fe93544e-ff85-45f4-b780-12c2e292f58d":{"name":"t1Park2","sourceUrl":null,"frameSize":{"x":82,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"1f2L_YzMeExozJPSKFXlYSdbxyew5JFN","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":80},"rootRelativePath":"assets/fe93544e-ff85-45f4-b780-12c2e292f58d.png"},"6879e917-d6e1-4071-8977-cdfcbf20ddf5":{"name":"cargoShip","sourceUrl":null,"frameSize":{"x":701,"y":208},"frameCount":1,"looping":true,"frameDelay":12,"version":"F2xWYvd2eSek5GlHGV7TT.vY2arllnQc","loadedFromSource":true,"saved":true,"sourceSize":{"x":701,"y":208},"rootRelativePath":"assets/6879e917-d6e1-4071-8977-cdfcbf20ddf5.png"},"8a8a4c43-a2db-4403-8c6e-b0c920f9517c":{"name":"cloudsTopLeft","sourceUrl":null,"frameSize":{"x":804,"y":612},"frameCount":1,"looping":true,"frameDelay":12,"version":"NGGe.2KtdV8Z1.Ym2oDmBCtn3NWoF.8h","loadedFromSource":true,"saved":true,"sourceSize":{"x":804,"y":612},"rootRelativePath":"assets/8a8a4c43-a2db-4403-8c6e-b0c920f9517c.png"},"9e8e9360-7d40-4ec1-ad49-64158811912d":{"name":"cloudsTopRight","sourceUrl":null,"frameSize":{"x":804,"y":612},"frameCount":1,"looping":true,"frameDelay":12,"version":"h35YMm0S6fBpoMXau6URk3EewTjIEvKv","loadedFromSource":true,"saved":true,"sourceSize":{"x":804,"y":612},"rootRelativePath":"assets/9e8e9360-7d40-4ec1-ad49-64158811912d.png"},"21e97009-4c8f-49be-aace-581088d18055":{"name":"cloudsBotLeft","sourceUrl":null,"frameSize":{"x":804,"y":612},"frameCount":1,"looping":true,"frameDelay":12,"version":"u9kmSXWOQ7TSfO9e5b8GREguQRi1Hb93","loadedFromSource":true,"saved":true,"sourceSize":{"x":804,"y":612},"rootRelativePath":"assets/21e97009-4c8f-49be-aace-581088d18055.png"},"65b0bac4-a883-4a4f-b52b-c388936df244":{"name":"cloudsBotRight","sourceUrl":null,"frameSize":{"x":804,"y":612},"frameCount":1,"looping":true,"frameDelay":12,"version":"QBTaUp8WjZASFD.eVioFdM2A2djm8hrx","loadedFromSource":true,"saved":true,"sourceSize":{"x":804,"y":612},"rootRelativePath":"assets/65b0bac4-a883-4a4f-b52b-c388936df244.png"},"cd7cacac-28a8-489a-bdce-a45ae6767c67":{"name":"mapSC","sourceUrl":null,"frameSize":{"x":804,"y":612},"frameCount":1,"looping":true,"frameDelay":12,"version":"gIzX9zKi.UMw8Qy.W.MFgNuKVC2tDgCz","loadedFromSource":true,"saved":true,"sourceSize":{"x":804,"y":612},"rootRelativePath":"assets/cd7cacac-28a8-489a-bdce-a45ae6767c67.png"},"b9cc961e-0cec-4b0c-8091-211d1c0a9e1a":{"name":"bag","sourceUrl":null,"frameSize":{"x":340,"y":463},"frameCount":1,"looping":true,"frameDelay":12,"version":"8MYqGFQueUVrzt_wkgL4vJuR6_RSRdLs","loadedFromSource":true,"saved":true,"sourceSize":{"x":340,"y":463},"rootRelativePath":"assets/b9cc961e-0cec-4b0c-8091-211d1c0a9e1a.png"},"109eb801-755a-4d7a-b70f-34e791d9ac2e":{"name":"can","sourceUrl":null,"frameSize":{"x":260,"y":476},"frameCount":1,"looping":true,"frameDelay":12,"version":"liOkUJXCPkKEiqItvimi0TcqZY_BZapB","loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":476},"rootRelativePath":"assets/109eb801-755a-4d7a-b70f-34e791d9ac2e.png"},"e0ac0681-e52a-40c9-88f5-75252ce16fe9":{"name":"soupCan","sourceUrl":null,"frameSize":{"x":249,"y":373},"frameCount":1,"looping":true,"frameDelay":12,"version":"lr6cu8iRxkYvygnuR7zzLZh_NQPO1Y2D","loadedFromSource":true,"saved":true,"sourceSize":{"x":249,"y":373},"rootRelativePath":"assets/e0ac0681-e52a-40c9-88f5-75252ce16fe9.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//
World.frameRate=30;
//Global Variables{
  var loopCount=0;
  var cFunding = 1000000;
  var cLoans = 0;
  var cIncome = 0;
  var cMoneyUpdateCount = -60;
  var menuOpenLeft = false;
  var offerOpen=false;
  var level = -1;
  var startPressed = false;
  var oldFunds;
  var winner = 0;
  var winLoop=-60;
  var gameplayTime = 0;
  var randomJobLocationsLeft = [-1,-1];
  var lJobCooldown=-3600;
  var jobProgressLeft = 0;
  var dividends = 0;
  var job=1; //advocacy:1, clean-up events:2,...
  var progressMessageLeft = '[E] Advocate';
  var lTouchingJob = false;
  var educationOpenLeft=false;
  var randomQuestionLeft=randomNumber(0,19);
  var quizHoverLeft = 1;
  var quizColorsLeft = ['white','lightGray','lightGray','lightGray'];
  var quizStartLoop=-3600;
  var educationProgressLeft = -1;
  var loopAtAnswerLeft = -200;
  var totalQuestionsLeft = 0;
  var rRollLeft;
  var isChar1 = true;
  var voteData = ["none","0",50];
  var voteLoop = -3600;
  var votingLoop = -3600;
  var loopCopy=0;
  var carsAvailable = [true,true,true,true];
  var carCooldown = -3600;
  var parksCompleted=[false,false];
  var zoomedIn=false;
  var oldPosition=[-1,-1];
  var cleanUpActive = false;
  var trashCollisionNum = -1;
  var trashPickedUp = 0;
  var cleanUpLoop = -3600;
  
  //clean-up data
  var openCULocations = [
    true,true,true,true,true,true,true,
    true,true,true,true,true,true,true,
    true,true,true,true,true,true,true,
    true,true,true,true,true,true,true,
    true,true,true,true
    ];
  var trashPositions = [
    -1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1
    ];
  
  //Data of offers
  var offersAvailable = [true,true,true];
  var offerIncome = [0,0,0];
  var offerIsConstruction = [false,false,false];
  var offerLocations = [-1,-1,-1];
  var offerBuildCooldowns = [-3600,-3600,-3600];
  var offerRatings = ["","",""];
  var ratingColors = ["white","white","white"];
  
  var pauseMainFunctions = false;
  
  //Data of each share of each plot
  //0: Up for sale, 1: owned
  var t1Shares = [[0,0,0],
  [0,0,0],[0,0,0],[0,0,0],
  [0,0,0],[0,0,0],[0,0,0],
  [0,0,0],[0,0,0]
  ];
  var t2Shares = [
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]
];
  var t3Shares = [
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
  
  var t1ZeroIndexes = [0,0,0,0,0,0,0,0,0];
    var t2ZeroIndexes = [0,0,0];
    var t3ZeroIndexes = [0,0];  
  
  //Land data
  var t1PlotIsCompleted =[false,false,false,false,false,false,false,false,false]; 
  var t2PlotIsCompleted =[false,false,false];
  var t3PlotIsCompleted =[false,false];
  var t1BuildingPlaced =[false,false,false,false,false,false,false,false,false]; 
  var t2BuildingPlaced =[false,false,false];
  var t3BuildingPlaced =[false,false];
  var t1LandIsOpen =[true,true,true,true,true,true,true,true,true];
  var t2LandIsOpen =[true,true,true];
  var t3LandIsOpen =[true,true];
  
  //data of street availability
  var streetsOpen = [
  true,true,true,true,true,//left street
  true,true,true,true,true,//right street
  false,true,true,false,true,true,//mid horiz street
  ];
  var streetsFinished = [
  false,false,false,false,false,//left street
  false,false,false,false,false,//right street
  false,false,false,false,false,false,//mid horiz street
  ];
  
  //Data of shares owned per player
  var p1CompleteSharesOwned = [0,0,0];
  var plotsCompletedLeft=0;

    
  //Data of job icon locations
  var jobLocations = [
    -1,-1,
    -1,-1,
    -1,-1,
    ];
    
    //Text of quiz questions and answer choices
    var vocabQuizText = [
      ["What does the term 'ownership' mean?",'A. To use something temporarily','B. The act or state of possesing something','C. To be good at something'],
      ["What does the term 'money' mean?",'A. A way of measuring the value of goods or services','B. Something that can only be earned through labor','C. Something inherently valuable'],
      ["What does the term 'economics' mean?",'A. The movement of stock prices','B. The measure of trade between people and entities',"C. The study of wealth's production, consumption, and distribution"],
      ["What does the term 'production' mean?",'A. The act of using something','B. The act of creating goods or services','C. The act of learning'],
      ["What does the term 'consumption' mean?",'A. The act of using something','B. The act of creating goods or services','C. The act of learning'],
      ["What does the term 'distribution' mean?",'A. Saving something for future use.','B. Investing in something to grow your money','C. The act of sharing something amongst a group of people'],
      ["What does the term 'investing' mean?",'A. The expending of money with the expectation of making a profit','B. Buying something that will not generate income','C. Producing goods or services to earn money'],
      ["What does the term 'collateral' mean?",'A. An easy way of earning income','B. Something pledged as security for the repayment of a loan','C. Government subsidies'],
      ["What does the term 'insurance' mean?",'A. Paying into a system with no expectation for a return','B. The act of saving your money for an emergency','C. Guaranteed compensation for a loss in return for a premium'],
      ["What does the term 'debt' mean?",'A. A promise that was not followed through','B. The income left over after all expenses have been paid','C. Something that is owed or due'],
      ["What does the term 'credit' mean?",'A. A potential loan','B. A way of measuring risk',"C. Something used in place of cash"],
      ["What does the term 'capital assets' mean?",'A. Rented properties','B. Valuable, owned properties','C. A consumable item'],
      ["What does the term 'interest' mean?",'A. Money paid over and above a loan principle','B. The total amount someone owes','C. The attractiveness of a location for businesses'],
      ["What does the term 'dividends' mean?",'A. Government subsidies','B. Debt that must be paid back',"C. A portion of a company's profits paid regularly to shareholders"],
      ["What does the term 'inflation' mean?",'A. An imbalance in favor of production over consumption','B. An imbalance in favor of consumption over production','C. The only indicator of the health of an economy'],
      ["What does the verb 'to finance' mean?",'A. To provide funding for a project','B. To take ownership of a project','C. To cut funding from a project'],
      ["What is the Federal Reserve?",'A. The Central Bank of the United States','B. The global entity responsible for regulating trade','C. The collection of local state banks'],
      ["What does the term 'paradigm' mean?",'A. A problem or challenge','B. A framework or way of thinking about something','C. A question'],
      ["What does justice mean?",'A. Ensuring everyone has equal success in life','B. Fairness -- giving everyone an equal opportunity to be successful','C. Giving some people advantages over others'],
      ["What is the meaning of a democracy?",'A. A government controlled by a select few people','B. A government that allows for voting','C. A government of the people, by the people, and for the people']
      ];
    var quizText = [
      ['The Heart of America Citizen’s Land Development Coop (HOA-CLDC) is …','A. A legal trust','B. A for-profit cooperative or corporation','C. A not-for-profit group',"D. A government agency"],
      ['The purpose of the CLDC is to…','A. Develop land and infrastructure in order to attract businesses and residents','B. Empower all Missouri residents, including the poorest St.Louis neighborhoods',
      'C. Turn every Missouri resident into an owner of income-producing capital (land)','D. All of the above'],
      ['Who is eligible for membership in the CLDC?','A. Residents who are 18 years old and older','B. Low-income families','C. All permanent residents, with no exceptions','D. People who can afford to invest in the CLDC'],
      ['How will government-owned land acquired by the CLDC be paid for?','A. It will be transferred free of charge to the CLDC','B. The local residents will pool their money to purchase it from the government','C. Outside investors will acquire it','D. The CLDC will pay for it'],
      ['Who will plan the redevelopment of CLDC-owned local land and infrastructure?','A. The local government','B. The Federal government','C. A local not-for-profit group','D. A private-sector development group working with the CLDC’s shareholders'],
      ["Where will the money come from to redevelop the CLDC's land & infrastructure?",'A. From regional Federal Reserve Banks, with insured loans made by local banks','B. Individual residents of this neighborhood',
      'C. Local, state and federal government','D. Outside investors'],
      ['Where will the money come from to pay off the bank loans to the CLDC trust?','A. Local property taxes paid to the local government','B. A special income tax on people earning over $1,000,000',
      "C. Pre-tax profits from leasing fees for using the CLDC's land & infrastructure",'D. Grants and donations from local not-for-profit groups and charities'],
      ['What happens if the CLDC cannot repay its loans?','A. Personal property of the resident-shareholders will be seized by the lenders',
      'B. The loan amount defaulted on will be covered by capital credit insurance','C. The local government will subsidize the amount that is defaulted on','D. The lenders will forgive the CLDC loans that can’t be repaid'],
      ['Once the loans to the CLDC trust are paid off, the future profit stream will be …','A. “Retained” in the CLDC to pay for future land development projects',
      'B. Eaten up by inflation','C. Paid out to HOA-CLDC resident-shareholders as taxable ownership income','D. Paid to the local government by the CLDC as property taxes'],
      ['Which of these statements is true?','A. Every resident-shareholder of the HOA-CLDC will have an equal vote','B. Every resident-shareholder of the HOA-CLDC will share the dividends equally',
      'C. Each resident-shareholder will have an equal, lifetime share in the HOA-CLDC','D. All of the above'],
      ['As the HOA CLDC project starts to grow the local economy…','A. Economic conditions will become less friendly to political democracy','B. People will become more dependent on government for their incomes','C. The wealth and power gap will get smaller',
      'D. Rising land values will force the original residents to move from their homes'],
      ];
  
    //Data of quiz questions that have been answered already to prevent repeats
      var questionsAnsweredLeft = [
    false,false,false,false,
    false,false,false,false,
    false,false,false
    ];
    var vocabQuestionsAnsweredLeft = [//add more falses when questions are added
    false,false,false,false,
    false,false,false,false,
    false,false,false,false,
    false,false,false,false,
    false,false,false,false
    ];

    //Data of correct quiz answers
    var vocabQuizAnswers = [2,1,3,2,1,3,1,2,3,3,1,2,1,3,2,1,1,2,2,3];
    var quizAnswers = [2,4,3,1,4,1,3,2,3,4,3];
//}

//sprites{
//hidden walls for collisions{
var hiddenWalls = createGroup();
//left t1 plots
for(var x=0;x<4;x++)(hiddenWalls.add(createSprite(22.5,53+(x*41),30,10)));
//right t1 plots
for(var x=0;x<4;x++)(hiddenWalls.add(createSprite(377.5,53+(x*41),30,10)));
//plot 8 (top left tier 1)
hiddenWalls.add(createSprite(98,50.5,32,10));
//top row tier 2 buildings
for(var x=1;x<3;x++)(hiddenWalls.add(createSprite(119.7+(x*80.2),48,74,17)));
//t3 buildings
hiddenWalls.add(createSprite(134.5,135,106,18));
hiddenWalls.add(createSprite(265.5,135,106,18));
//river and highway walls
hiddenWalls.add(createSprite(20,6,40,16));//left river
hiddenWalls.add(createSprite(200,6,246,16));//middle river
hiddenWalls.add(createSprite(380,6,40,16));//right river
hiddenWalls.add(createSprite(200,235,400,10));//highway

//top of map
hiddenWalls.add(createSprite(200,-10,405,2));

hiddenWalls.setVisibleEach(false);
//}

//Land, assets, and buildings{
//river
var river = createSprite(200,21);
river.setAnimation("river");river.scale=0.5;

//boat
var ship = createSprite(0,-50);
ship.setAnimation("cargoShip");
ship.scale=0.1;

//Streets
var streets = createGroup();
//left vertical strip
streets.add(createSprite(60,14));streets[0].setAnimation("bridgeVert2");
streets.add(createSprite(60,60));streets[1].setAnimation("streetVert2");
streets.add(createSprite(60,106));streets[2].setAnimation("intersectionLeft2");
streets.add(createSprite(60,152));streets[3].setAnimation("streetVert2");
streets.add(createSprite(60,198));streets[4].setAnimation("streetVert2");
//right vertical strip
streets.add(createSprite(340,14));streets[5].setAnimation("bridgeVert2");
streets.add(createSprite(340,60));streets[6].setAnimation("streetVert2");
streets.add(createSprite(340,106));streets[7].setAnimation("intersectionRight2");
streets.add(createSprite(340,152));streets[8].setAnimation("streetVert2");
streets.add(createSprite(340,198));streets[9].setAnimation("streetVert2");
//center horiz. strip
for(var x=0;x<6;x++){
  streets.add(createSprite(100+(x*40),106));
  streets[x+10].setAnimation("streetHoriz2");
}
streets.setScaleEach(0.725);

//decorational streets with low priority
var streetsDec = createGroup();
streetsDec.add(createSprite(60,280));streetsDec[0].setAnimation("streetVert1");
streetsDec.add(createSprite(340,280));streetsDec[1].setAnimation("streetVert1");

//Land plots
var t1Land = createGroup();
for(var x=0;x<4;x++)(t1Land.add(createSprite(22.5,59.5+(x*41),35,40)));
for(var x=0;x<4;x++)(t1Land.add(createSprite(377.5,59.5+(x*41),35,40)));
t1Land.add(createSprite(98,59.5,35,40));
t1Land.setColorEach(rgb(0,0,0,0.1));
var t2Land = createGroup();
for(var x=0;x<3;x++)(t2Land.add(createSprite(119.7+(x*80.2),59.5,80,40)));
t2Land.setColorEach(rgb(0,0,0,0.1));
var t3Land = createGroup();
t3Land.add(createSprite(134.5,147,108,42));
t3Land.add(createSprite(265.5,147,108,42));
t3Land.setColorEach(rgb(0,0,0,0.1));
t1Land[0].visible=t1Land[3].visible=t1Land[6].visible=
t2Land[0].visible=t2Land[2].visible=false;

//Buildings
var t1Buildings = createGroup();
for(var x=0;x<4;x++)(t1Buildings.add(createSprite(22.5,60.5+(x*41),35,40)));


for(var x=0;x<4;x++)(t1Buildings.add(createSprite(377.5,60.5+(x*41),35,40)));

t1Buildings.add(createSprite(97,61.5,35,40));

t1Buildings.add(createSprite(22.5,280,35,40));//botLeft
t1Buildings.add(createSprite(377.5,280,35,40));//botRight
t1Buildings.add(createSprite(302.5,280,35,40));//botMiddle
var t2Buildings = createGroup();
for(var x=0;x<3;x++)(t2Buildings.add(createSprite(119.7+(x*80.2),60,80,40)));
for(var x=0;x<3;x++)(t2Buildings.add(createSprite(119.7+(x*80.2),279,80,40)));
t2Buildings[0].visible=t2Buildings[5].visible=false;
var t3Buildings = createGroup();
t3Buildings.add(createSprite(134.5,147,108,42));
t3Buildings.add(createSprite(265.5,147,108,42));

//green spaces
var green1 = createSprite(137,59.5,46,43.5);
var green2 = createSprite(263,280);
green1.setAnimation("park2");
green1.scale=0.46;
green2.setAnimation("park1");
green2.scale=0.46;
var green3 = createSprite(200,155,15,32);
var green4 = createSprite(200,195);
green4.setAnimation("t3Park2");
green3.setAnimation("t3Alleyway2");
var green5 = createSprite(19,213);
var green6 = createSprite(381,213);
green5.setAnimation("t1Park2"); green6.setAnimation("t1Park2");
green5.scale=green6.scale=0.5;

//collision boxes for green1 and green4
var green1HB = createSprite(green1.x+0.5,green1.y,20,40);
var green4HB = createSprite(green4.x,green4.y+4,245,60  );
var green4HB2 = createSprite(green3.x,green3.y,15,55);
green1HB.visible=green4HB.visible=green4HB2.visible=false;
//}

//Share sprites{
var leftBackground = createSprite(200,384,180,22);
leftBackground.visible=false; leftBackground.shapeColor = 'black';

//share indicators
var shareHeader = createSprite(200.5,321,178,22);
shareHeader.visible=false;
var t1LeftIndicators = createGroup();
for(var x=0;x<3;x++)(t1LeftIndicators.add(createSprite(142+(x*58),384,53,16)));
t1LeftIndicators.setColorEach('white');t1LeftIndicators.setVisibleEach(false);
var t2LeftIndicators = createGroup();
for(var x=0;x<5;x++)(t2LeftIndicators.add(createSprite(130+(x*35),384,30,16)));
t2LeftIndicators.setColorEach('white');t2LeftIndicators.setVisibleEach(false);
var t3LeftIndicators = createGroup();
for(var x=0;x<7;x++)(t3LeftIndicators.add(createSprite(125+(x*25),384,20,16)));
t3LeftIndicators.setColorEach('white');t3LeftIndicators.setVisibleEach(false);
var g1Indicator = createSprite(200,384,170,16);
var g4Indicator = createSprite(200,384,170,16);
g1Indicator.shapeColor=g4Indicator.shapeColor=rgb(255,255,255);
g1Indicator.visible=g4Indicator.visible=false;
//}

//background sprites{
var mainWalls = createGroup();
mainWalls.add(createSprite(0,200,10,400));mainWalls.add(createSprite(200,0,400,10));
mainWalls.add(createSprite(400,200,10,400));mainWalls.add(createSprite(200,400,400,10));
var educationLevelLeft = createSprite(95,324);
educationLevelLeft.setAnimation('noSign');educationLevelLeft.scale=0.05;
var incomeBackRight = createSprite(343.5,340,100,25);
var incomeRight = createSprite(343.5,340,95,20);
incomeRight.shapeColor='white';incomeBackRight.shapeColor=rgb(50,50,50);
var loansBackRight = createSprite(343.5,382,100,25);
var loansRight = createSprite(343.5,382,95,20);
var dividendsBackLeft = createSprite(57.5,382,100,25);
var dividendsLeft = createSprite(57.5,382,95,20);
dividendsLeft.shapeColor=rgb(255,190,190);dividendsBackLeft.shapeColor=rgb(50,50,50);
loansRight.shapeColor=rgb(200,255,200);loansBackRight.shapeColor=rgb(50,50,50);

//visibility statements
educationLevelLeft.visible=
loansBackRight.visible=loansRight.visible=incomeRight.visible=incomeBackRight.visible=
dividendsLeft.visible=dividendsBackLeft.visible=false;
//}

//job, trash, and offer sprites{
//trash sprites
var trash = createGroup();
for(var xu = 0;xu<10;xu++){
  trash.add(createSprite(-50,-50));
  if(xu==1||xu==4||xu==7||xu==9){
    trash[xu].setAnimation("bag");
  }else if(xu==2||xu==5||xu==8){
    trash[xu].setAnimation("can");
  }else{
    trash[xu].setAnimation("soupCan");
  }
}
trash.setScaleEach(0.03);
trash[0].scale=trash[3].scale=trash[6].scale=0.04;

var jobSprites = createGroup();
//advocating sprite
jobSprites.add(createSprite(-50,-50));
jobSprites.add(createSprite(-50,-50));
jobSprites[0].setAnimation("check");jobSprites[1].setAnimation("check");
jobSprites[0].scale=jobSprites[1].scale=0.05;



//trade offers
var offer1 = createSprite(-50,-50);
offer1.setAnimation("offer.png");offer1.scale=0.3;
var offer2 = createSprite(-50,-50);
offer2.setAnimation("offer.png");offer2.scale=0.3;
var offer3 = createSprite(-50,-50);
offer3.setAnimation("offer.png");offer3.scale=0.3;
//}

//character sprites
var charBoxLeft=createSprite(100,190,15,10);
var leftChar = createSprite(200,100);
leftChar.scale=0.075;leftChar.setAnimation("leftDown");
leftChar.visible=charBoxLeft.visible=false;

//building roofs {
var t1Roofs = createGroup();
for(var x=0;x<4;x++)(t1Roofs.add(createSprite(22.5,46.5+(x*41),34,17)));


for(var x=0;x<4;x++)(t1Roofs.add(createSprite(377.5,46.5+(x*41),34,17)));

t1Roofs.add(createSprite(97,47,34,18)); //top left

t1Roofs.add(createSprite(22.5,266,34,17));//botLeft
t1Roofs.add(createSprite(377.5,266,34,17));//botRight
t1Roofs.add(createSprite(302.5,266,34,17));//botMiddle
t1Roofs.setColorEach(rgb(220,220,220));

var t2Roofs = createGroup();
for(var x=0;x<3;x++)(t2Roofs.add(createSprite(119.7+(x*80.2),43.5,79,17)));
for(var x=0;x<3;x++)(t2Roofs.add(createSprite(119.7+(x*80.2),262.5,79,17)));
t2Roofs[0].visible=t2Roofs[5].visible=false;
t2Roofs.setColorEach(rgb(220,220,220));


var t3Roofs = createGroup();
t3Roofs.add(createSprite(99.5,105,27,14));t3Roofs.add(createSprite(230.5,105,27,14));
t3Roofs.add(createSprite(153.4,131,69.5,20));t3Roofs.add(createSprite(284.4,131,69.5,20));
t3Roofs.add(createSprite(99.5,113));t3Roofs.add(createSprite(230.5,113));
t3Roofs[4].scale=0.455;t3Roofs[5].scale=0.455;
t3Roofs.setVisibleEach(false);t3Roofs.setColorEach(rgb(220,220,220));
t3Roofs[4].setAnimation("t3BuildingSide1");t3Roofs[5].setAnimation("t3BuildingSide1");
//}

mainWalls.add(createSprite(200,305,400,10));mainWalls.setColorEach(rgb(50,50,50));

//Decorational streets making the delmar divide
for(var x=0;x<10;x++){
  streetsDec.add(createSprite(20+(x*40),238));
  streetsDec[x+2].setAnimation("streetHWay");
}
streetsDec.setScaleEach(0.725);

//car sprites
var cars = createGroup();
for(var zy = 0;zy<4;zy++){
  cars.add(createSprite(0,-50));
}
cars.setScaleEach(0.1);

//trash cutscreen sprites{
  var cleanUpSprites = createGroup();
  cleanUpSprites.add(createSprite(200,157,320,50));
  cleanUpSprites[0].shapeColor = rgb(255,255,255,0.85);
  cleanUpSprites.add(createSprite(200,120,320,24));
  cleanUpSprites[1].shapeColor=rgb(180,255,180,0.85);
  cleanUpSprites.add(createSprite(80,158));
  cleanUpSprites[2].setAnimation("groupIcon");cleanUpSprites[2].scale=0.06;
  cleanUpSprites.setVisibleEach(false);
//}


//intro sprites{
var whiteBackground = createSprite(200,200,402,402);
whiteBackground.shapeColor=rgb(240,240,240,0.85);
var leftChar1 = createSprite(255,335);
leftChar1.scale=0.09;leftChar1.setAnimation("leftDown");
var rightChar1 = createSprite(345,335);
rightChar1.scale=0.09;rightChar1.setAnimation("rightDown");

var startBtn = createSprite(200,175,110,30);
startBtn.shapeColor=rgb(180,200,255);
var rChars = createGroup(); 
rChars.add(createSprite(255,370,25,25));
rChars.add(createSprite(345,370,25,25));
rChars.add(createSprite(255,370,20,20));
rChars.add(createSprite(345,370,20,20));
rChars[0].shapeColor = rChars[1].shapeColor = "black";
leftChar1.visible=rightChar1.visible=false;
rChars.setVisibleEach(false);
var tutorialSprites = createGroup();
tutorialSprites.add(createSprite(60,335,68,38));
tutorialSprites.add(createSprite(130,335,68,38));
tutorialSprites.add(createSprite(200,335,68,38));
tutorialSprites.add(createSprite(270,335,68,38));
tutorialSprites.add(createSprite(340,335,68,38));
tutorialSprites.add(createSprite(200,375,148,38));
tutorialSprites.setVisibleEach(false);

//zoom-in sprites
var greenIntro = createSprite(200,152,390,295);
var mapSprite = createSprite(200,150);
mapSprite.setAnimation("mapSC");
greenIntro.shapeColor=rgb(77, 153, 62);
mapSprite.visible=false;
//clouds
var clouds = new Group();
for(var xc = 0;xc<4;xc++){
clouds.add(createSprite(200,147.5));
}
clouds.setScaleEach(0.5);
clouds[0].setAnimation("cloudsTopLeft");
clouds[1].setAnimation("cloudsTopRight");
clouds[2].setAnimation("cloudsBotRight");
clouds[3].setAnimation("cloudsBotLeft");
clouds.setVisibleEach(false);
var whiteForeground = createSprite(200,200,402,402);
whiteForeground.shapeColor = rgb(255,255,255,0.5);
var blackout = createSprite(200,200,402,402);
blackout.shapeColor=rgb(0,0,0);
var introBtn = createSprite(200,200,100,40);
introBtn.shapeColor=rgb(220,220,220);
var cesjLogo = createSprite(200,200);
cesjLogo.setAnimation("CESJ");cesjLogo.visible=false;cesjLogo.scale=0.25;
//}
//}

/////////////////////////////Draw Starts///////////////////////////////////
function draw() {
  if(startPressed&&!pauseMainFunctions){
    loopCount++;
  }else{
    drawSprites();textFont('tahoma');
    fill('black');textSize(30);textAlign('center','center');
    text('Play',200,200);
    if(mouseIsOver(introBtn)){
        introBtn.shapeColor=rgb(200,200,200);
      }else{
        introBtn.shapeColor=rgb(220,220,220);
      }
  if(mousePressedOver(introBtn)){
    startPressed=true;
    introBtn.visible=false;
    cesjLogo.visible=true;
    level=0;
    }
  }
  //main menu
  if(level==0){
    if(loopCount==90){
      //set up zoom-in
      greenIntro.visible=mapSprite.visible=whiteForeground.visible=true;
      clouds.setVisibleEach(true);
      mapSprite.scale=0.2;
      cesjLogo.visible=false;
      
      //set animations for buildings
      //tier 1 buildings
      t1Buildings[0].setAnimation("t1BuildingRuin");t1Roofs[0].shapeColor=rgb(180,180,180);
      t1Buildings[1].setAnimation("t1FenceRuin");t1Roofs[1].visible=false;
      t1Buildings[2].visible=t1Roofs[2].visible=false;
      t1Buildings[3].setAnimation("t1BuildingRuin");t1Roofs[3].shapeColor=rgb(180,180,180);
      t1Buildings[4].visible=t1Roofs[4].visible=false;
      t1Buildings[5].setAnimation("t1FenceRuin");t1Roofs[5].visible=false;
      t1Buildings[6].setAnimation("t1BuildingRuin");t1Roofs[6].shapeColor=rgb(180,180,180);
      t1Buildings[7].visible=t1Roofs[7].visible=false;
      t1Buildings[8].setAnimation("t1FenceRuin");t1Roofs[8].visible=false;
      t1Buildings[9].setAnimation("t1BuildingSide");
      t1Buildings[10].setAnimation("t1BuildingSide");
      t1Buildings[11].setAnimation("t1BuildingSide");
      
      //tier 2 buildings
      t2Buildings[1].setAnimation("t2FenceRuin");t2Roofs[1].visible=false;
      t2Buildings[2].setAnimation("t2BuildingRuin");t2Roofs[2].shapeColor=rgb(180,180,180);
      t2Buildings[3].setAnimation("t2BuildingSide2");
      t2Buildings[4].setAnimation("t2BuildingSide3");
      
      //tier 3 buildings
      t3Buildings[0].setAnimation("t3FenceRuin");
      t3Buildings[1].setAnimation("t3FenceRuin");
      
      for(var plot=0;plot<12;plot++){
      t1Buildings[plot].scale=0.41;
      t1Buildings[plot].y+=7; 
      }
      for(var plot1=1;plot1<5;plot1++){
      t2Buildings[plot1].scale=0.48;
      t2Buildings[plot1].y-=2;
      }
      for(var plot2=0;plot2<2;plot2++){
      t3Buildings[plot2].scale=0.45;
      t3Buildings[plot2].y-=17;
      }
      }else if(loopCount>90&&loopCount<120){
        var loopSinceStart = loopCount-90;
        //black fades out
        blackout.shapeColor=rgb(20,20,20,1-(loopSinceStart*0.045));
        //map zooms in
        mapSprite.scale=0.2+(0.3*(loopSinceStart/30));
        //cloud movement
        var loopFactor = loopSinceStart/10;
        clouds[0].setVelocity(-3-loopFactor,-2-loopFactor);
        clouds[1].setVelocity(3+loopFactor,-2-loopFactor);
        clouds[2].setVelocity(3+loopFactor,2+loopFactor);
        clouds[3].setVelocity(-3-loopFactor,2+loopFactor);
        }else if(loopCount==120){
        blackout.visible=false;
        clouds.setVelocityEach(0,0);
        clouds.setVisibleEach(false);
        greenIntro.visible=false;
      }else if(loopCount==130){
        mapSprite.visible=whiteForeground.visible=false;
        zoomedIn=true;
        leftChar1.visible=rightChar1.visible=true;
        rChars.setVisibleEach(true);
      }
      
    background(rgb(175,138,103));
     fill("lightGray"); rect(5,310,390,90);stroke(rgb(50,50,50));
 fill(rgb(50,50,50));stroke('black');strokeWeight(3);

    if(loopCount>90){
      if(mouseIsOver(startBtn)){
        startBtn.shapeColor=rgb(210,230,255);
      }else{
        startBtn.shapeColor=rgb(180,200,255);
      }
      //intro animation starts
    if((mousePressedOver(startBtn)||keyWentDown("space"))&&loopCount>130){
      //start cars
      carCooldown=100;
      //start ship
      ship.x=-40;
      ship.y=15;
      ship.velocityX=1;
      
      level=1;
      loopCount=0;
      whiteBackground.visible=blackout.visible=leftChar1.visible=rightChar1.visible=startBtn.visible=false;
      rChars.setVisibleEach(false);
      if(isChar1){
        leftChar.setAnimation("leftDown");
      }else{
        leftChar.setAnimation("rightDown");
      }
      cFunding = 900000;//15000;
    }
      //}
    }
    //char selection
    if(keyWentDown("e")){
    isChar1=!isChar1;
    }
    
    if(isChar1){
      rChars[2].shapeColor="lightGreen";
      rChars[3].shapeColor="white";
      textSize(15);
    }else{
      rChars[2].shapeColor="white";
      rChars[3].shapeColor="lightGreen";
      textSize(15);
    }
    
    drawSprites();
    
    if(zoomedIn){
      textSize(27);textFont('tahoma');fill('black');strokeWeight(0.9);stroke('black');textAlign('center','center');
      text('Economic Democracy In Action',200,60);
    textSize(20);strokeWeight(0.5);
    line(15,71,385,71);
    text('Start Game',200,175);
    textSize(20);strokeWeight(0.4);
    text("Select a Character:",145,340);
    textSize(18);strokeWeight(0.6);
    text('By the CESJ',200,90);  
    textSize(16);strokeWeight(0.4);
    text("[E]\n<--->",300,360);
    }
    whiteBackground.shapeColor=rgb(255,255,255,0.70+(Math.abs(30-(loopCount)%60)/320));
  }
  //intro animation
  else if(level==1){
    //intro animation is done
    if(loopCount>=930){
      //replace with the same code as the skip button////////////////
    }
    
    background(rgb(175,138,103));
    fill("lightGray"); rect(5,310,390,90);stroke(rgb(50,50,50));
 fill(rgb(50,50,50));stroke('black');strokeWeight(3);
    drawSprites();
    vehicleMovement();
    textAlign('center','top');noStroke();textSize(15);textFont('tahoma');
    if(loopCount<530){
      if(loopCount<60){
        //text("Hello, Player...",200,262);
      }else if(loopCount<120){
        //text("Hello, Player...\n"+introMessageLeft,200,262);
      }else if(loopCount<180){
        //text("Hello, Player...\n"+introMessageLeft+"\nYour salary:\n$"+p1Salary,200,262);
      }else if(loopCount<390){
        //text("Hello, Player...\n"+introMessageLeft+"\nYour salary:\n$"+p1Salary+"\nYour savings:\n$"+p1Money,200,262);
      }else{
        textSize(20);textAlign('left','top');
        if(loopCount<420){
          //text("Wait,",70,280);
        }else if(loopCount<450){
          //text("Wait, is that a...",70,280);
        }else{
          //text("Wait, is that a... TORNADO?!",70,280);
        }
        }
    }else if(loopCount==530){
  
    }else if(loopCount>780){
      textAlign('left','top');textSize(20);
    if(loopCount<810){
       //text("Well,",50,280);
    }else if(loopCount<820){
      //text("Well, I guess",50,280);
    }else if(loopCount<830){
      //text("Well, I guess it's",50,280);
    }else if(loopCount<840){
      //text("Well, I guess it's time to",50,280);
    }else if(loopCount<855){
      //text("Well, I guess it's time to rebuild",50,280);
    }else if(loopCount<870){
      //text("Well, I guess it's time to rebuild.",50,280);
    }else if(loopCount<885){
      //text("Well, I guess it's time to rebuild..",50,280);
    }else{
      //text("Well, I guess it's time to rebuild...",50,280);
    }
  }
    fill('lightGray');rect(150,372,100,23);
    fill('black');textSize(14);textAlign('center','top');
    text('[SPACE] to skip intro',200,377);
    
    //skip intro to start game
    if(keyWentDown("space")){
      level=2;
      loopCount=0;
      educationLevelLeft.visible=leftChar.visible=
      loansBackRight.visible=loansRight.visible=incomeRight.visible=incomeBackRight.visible=
      dividendsLeft.visible=dividendsBackLeft.visible=true;
    }
                    //////intro complete, gameplay begins/////////
  }
  //main game
  else if(level==2){  
  //add income from land, calculate loans, place offers, place trash{
  if(loopCount%60==0){
    oldFunds = cFunding;
    //randomly place trade offers on completed plots
    rRollLeft = randomNumber(1,20)*(21+plotsCompletedLeft);
    if(rRollLeft>=400){
      //loop through each of the three offers, if one is open use that one
      for(var xa = 0;xa<3;xa++){
        if(offersAvailable[xa]){
          if(xa==0)(placeOffer(offer1,xa));
          else if(xa==1)(placeOffer(offer2,xa));
          else if(xa==2)(placeOffer(offer3,xa));
          break;
        }
        }
    }
    //spawn trash for clean-up events
    var rRollCU = randomNumber(1,10+plotsCompletedLeft);
    if(rRollCU<=3){
      for(var t = 0;t<10;t++){
        if(placeTrash(randomNumber(0,31),t)){
          break;
        }
      }
    }
    
      //loans calculations for the CLDC
      if(loopCount%480==0){
          var cRoll = 5000+(randomNumber(plotsCompletedLeft,(plotsCompletedLeft+2)*2)*500);//2.5k-4.5k --> 11k-22.5k
          cLoans+=cRoll;
          cFunding+=cRoll;
          cMoneyUpdateCount=loopCount;
        }
    //calculate savings increase or loan payment
    if(cLoans>=cIncome){
      cLoans-=cIncome;
    }else if(cLoans<cIncome){
      cLoans=0;
    }
      //for the CLDC
      if(cIncome>0)(incomeRight.shapeColor=rgb(200,255,200));
      else(cIncome.shapeColor='white');
          //color loans counters, add interest to player loans
    if(cLoans>0){
      loansRight.shapeColor=rgb(255,190,190);
    }else if(cLoans==0)(loansRight.shapeColor=rgb(200,255,200));
    
    //for personal dividends
    if(dividends>0){
      dividendsLeft.shapeColor=rgb(200,255,200);
    }else{
      dividendsLeft.shapeColor=rgb(255,190,190);
    }
    
  //check if player has won based on dividends
  if(dividends>=100000){
    winLoop=loopCount;
    winner=1;
  }
  }
  //}
  
  background(rgb(175,138,103));
  //sprite movement{
  if(!pauseMainFunctions){
    spriteMovement(1.5); 
  }
  //}
  
  //smaller hitbox follows the player
  charBoxLeft.x = leftChar.x;charBoxLeft.y=leftChar.y+10;

  //display background{
 fill("lightGray"); rect(5,310,390,90);stroke(rgb(50,50,50));
 stroke("black");
 strokeWeight(3);
 if(!educationOpenLeft){
 if(!menuOpenLeft&&!offerOpen){
   //green "CLDC" header
 fill(110,220,115); rect(110,312,180,40);
 fill(rgb(230,230,230));rect(110,353,180,40);
 //CLDC title
 strokeWeight(0.5);fill('black');
 textSize(24);textAlign(CENTER,CENTER);
 text("CLDC Funds",200,336);
 }else{
   line(110,310,110,395);
   line(290,310,290,395);
   strokeWeight(1);
   line(110,332,290,332);
 }
 }
 
 noStroke();
  //}
  noStroke();
  
  
  textFont("tahoma");

  //character collisions{
  //main walls
  leftChar.collide(mainWalls[0]);//leftChar.collide(mainWalls[1]);
  leftChar.collide(mainWalls[2]);leftChar.collide(mainWalls[3]);
  
  //top of map
  leftChar.collide(hiddenWalls[17]);
  
  //river
  leftChar.collide(hiddenWalls[13]);leftChar.collide(hiddenWalls[14]);leftChar.collide(hiddenWalls[15]);
  
  //highway
  leftChar.collide(hiddenWalls[16]);
  
  //buildings
  leftChar.collide(hiddenWalls[0]);
  if(t1BuildingPlaced[1])(leftChar.collide(hiddenWalls[1]));
  if(t1BuildingPlaced[2])(leftChar.collide(hiddenWalls[2]));
  leftChar.collide(hiddenWalls[3]);
  if(t1BuildingPlaced[4])(leftChar.collide(hiddenWalls[4]));
  if(t1BuildingPlaced[5])(leftChar.collide(hiddenWalls[5]));
  leftChar.collide(hiddenWalls[6]);
  if(t1BuildingPlaced[7])(leftChar.collide(hiddenWalls[7]));
  if(t1BuildingPlaced[8])(leftChar.collide(hiddenWalls[8]));
  if(t2BuildingPlaced[1])(leftChar.collide(hiddenWalls[9]));
  leftChar.collide(hiddenWalls[10]);
  if(t3BuildingPlaced[0])(leftChar.collide(hiddenWalls[11]));
  if(t3BuildingPlaced[1])(leftChar.collide(hiddenWalls[12]));
  //}
  
  //Fade to black if a player wins, switch to end screen{
  if(winLoop+30>loopCount){
    blackout.shapeColor=rgb(0,0,0,(loopCount+1-winLoop)/30);
    blackout.visible=true;
  }else if(winLoop+30==loopCount){
    level=3;
    leftChar.setVelocity(0,0);
    gameplayTime=Math.round(loopCount/30);
    loopCount=0;jobProgressLeft=0;
    blackout.visible=educationLevelLeft.visible=
    leftChar.visible=leftBackground.visible=
    loansBackRight.visible=loansRight.visible=incomeRight.visible=incomeBackRight.visible=
    dividendsLeft.visible=dividendsBackLeft.visible=false;
    t1Buildings.setVisibleEach(false);t2Buildings.setVisibleEach(false);t3Buildings.setVisibleEach(false);
    t1Roofs.setVisibleEach(false);t2Roofs.setVisibleEach(false);t3Roofs.setVisibleEach(false);
    t1Land.setVisibleEach(false);t2Land.setVisibleEach(false);t3Land.setVisibleEach(false);streets.setVisibleEach(false);
    t1LeftIndicators.setVisibleEach(false);t2LeftIndicators.setVisibleEach(false);t3LeftIndicators.setVisibleEach(false);
    jobSprites.setVisibleEach(false);
    green1.visible=green2.visible=false;
    offer1.x=offer1.y=offer2.x=offer2.y=offer3.x=offer3.y=-50;
       offer1.setAnimation("offer.png");offer2.setAnimation("offer.png");offer3.setAnimation("offer.png");
       offer1.scale=offer2.scale=offer3.scale=0.3;
  }
  //}
  drawSprites();
  //Education quiz text{
  if(!educationOpenLeft){
  }else if(educationProgressLeft<0){
    textAlign(LEFT, CENTER);textSize(13);
    //Light blue background to the header
  fill(rgb(210,210,255));strokeWeight(2);stroke(rgb(50,50,50));
  rect(6,310,390,25);
    if(quizStartLoop<0){
    
    fill("black");noStroke();textSize(18);
    text("[E] Start the Quiz",130,323);
    textSize(13);
    text("- Test your knowledge by taking an educational quiz!\n- All answers can be found on the cesj website.\n- When you 'graduate', you will be more effective at advocating.",12,365);
    
    if(keyWentDown("e")){
      quizStartLoop=loopCount;
    }
  }else{
    //quiz started
    //LEVEL 1
    textAlign(LEFT, CENTER);textSize(13);fill('black');
  //Darker blue progress bar
  fill(170,170,255);noStroke();
  rect(7,311,388*(educationProgressLeft+1),23);
  fill('black');strokeWeight(0.3);stroke('black');
  //text for the question 
  textSize(14);
  text(vocabQuizText[randomQuestionLeft][0],10,324);
  textSize(12);
  noStroke();
   for(var fg=1;fg<4;fg++){
    stroke(rgb(50,50,50));strokeWeight(2);
    fill(quizColorsLeft[fg-1]);
    rect(6,334+((fg-1)*21),390,20);
    //text for each answer choice
    noStroke();fill('black');
    text(vocabQuizText[randomQuestionLeft][fg],10,345+((fg-1)*21));
  }
  }
  }else if(educationProgressLeft<1){
    //LEVEL 2
  textAlign(LEFT, CENTER);textSize(13);fill('black');
    //blue header above menu for question prompt
    fill(rgb(210,210,255));strokeWeight(2);stroke(rgb(50,50,50));
  rect(6,296,390.5,24);
  //Darker blue progress bar
  fill(170,170,255);noStroke();
  rect(7,296,388*educationProgressLeft,21);
  fill('black');strokeWeight(0.3);stroke('black');
  //text for the question 
  textSize(11);
  text(quizText[randomQuestionLeft][0],10,310);
  noStroke();
   for(var f=1;f<5;f++){
    stroke(rgb(50,50,50));strokeWeight(2);
    fill(quizColorsLeft[f-1]);
    rect(6,321+((f-1)*18.5),390,18.5);
    //text for each answer choice
    noStroke();fill('black');
    text(quizText[randomQuestionLeft][f],10,331+((f-1)*18.5));
  }
  }else{
    textAlign(CENTER, CENTER);textSize(20);fill('black');
    //player graduated (educationProgress>=1)
    stroke("black");strokeWeight(2);
    fill(rgb(230,230,230));
    rect(98,310,204,85);
    fill(170,170,255);
    rect(98,310,204,30);
    textAlign(CENTER, CENTER);textSize(17);fill('black');noStroke();
    text('Congrats, You Graduated!',200,325);
    textSize(16);
    text("You are now more effective\nat leading your CLDC!",200,367);
    fill('black');textSize(16);
  }
  noStroke();
  textAlign(CENTER, CENTER);textSize(20);fill('black');
  //}
  //Education, plot, and job collisions{
            //education
  if((t2BuildingPlaced[1]&&charBoxLeft.isTouching(t2Land[1]))){
    if(menuOpenLeft)(closeMenu());
    if(!educationOpenLeft){
      //visiblility statements
         shareHeader.visible=educationLevelLeft.visible=incomeRight.visible=
         incomeBackRight.visible=loansRight.visible=loansBackRight.visible=
         dividendsLeft.visible=dividendsBackLeft.visible=false;
    leftBackground.visible=shareHeader.visible=false;
    t3LeftIndicators.setVisibleEach(false);
    t2LeftIndicators.setVisibleEach(false);
    t1LeftIndicators.setVisibleEach(false);
    educationOpenLeft=true;
    }
    if(educationProgressLeft<0){
      if(keyWentDown('R')&&loopAtAnswerLeft+21<loopCount){
      if(quizHoverLeft==3){
        quizHoverLeft=1;
        quizColorsLeft=['white','lightGray','lightGray','lightGray'];
      }else if(quizHoverLeft==2){
        quizHoverLeft=3;
        quizColorsLeft=['lightGray','lightGray','white','lightGray'];
      }else{
        quizHoverLeft=2;
        quizColorsLeft=['lightGray','white','lightGray','lightGray'];
      }
    }
      if(keyWentDown("E")&&loopAtAnswerLeft+21<loopCount&&quizStartLoop!=loopCount){
      loopAtAnswerLeft=loopCount;
      totalQuestionsLeft++;
      if(totalQuestionsLeft==19){
        vocabQuestionsAnsweredLeft = [
    false,false,false,false,
    false,false,false,false,
    false,false,false,false,
    false,false,false,false,
    false,false,false,false
    ];
    totalQuestionsLeft=1;
      }
      //if answer is correct
      if(quizHoverLeft==vocabQuizAnswers[randomQuestionLeft]){
        quizColorsLeft[quizHoverLeft-1]='lightGreen';
        educationLevelLeft.setAnimation("book");
        educationLevelLeft.scale=0.09;
        //if answer is incorrect
      }else{
        quizColorsLeft[quizHoverLeft-1]=rgb(255,200,200);
      }
      }
      //wait half a second to show result, then switch to next question
      if(loopAtAnswerLeft+20==loopCount){
          if(quizHoverLeft==vocabQuizAnswers[randomQuestionLeft])(educationProgressLeft+=0.101);
          quizColorsLeft[quizHoverLeft-1]='white';
          vocabQuestionsAnsweredLeft[randomQuestionLeft]=true;
          //find new random question
          randomQuestionLeft=randomNumber(0,19);
          while(vocabQuestionsAnsweredLeft[randomQuestionLeft]){
            randomQuestionLeft=randomNumber(0,19);
          }
          if(educationProgressLeft>0){
            quizHoverLeft=1;
            quizColorsLeft=quizColorsLeft=['white','lightGray','lightGray','lightGray'];
            randomQuestionLeft=randomNumber(0,10);
          while(vocabQuestionsAnsweredLeft[randomQuestionLeft]){
            randomQuestionLeft=randomNumber(0,10);
          }
          }
      }
    }else if(educationProgressLeft<1){
    if(keyWentDown('R')&&loopAtAnswerLeft+21<loopCount){
      if(quizHoverLeft==4){
        quizHoverLeft=1;
        quizColorsLeft=['white','lightGray','lightGray','lightGray'];
      }else if(quizHoverLeft==3){
        quizHoverLeft=4;
        quizColorsLeft=['lightGray','lightGray','lightGray','white'];
      }else if(quizHoverLeft==2){
        quizHoverLeft=3;
        quizColorsLeft=['lightGray','lightGray','white','lightGray'];
      }else{
        quizHoverLeft=2;
        quizColorsLeft=['lightGray','white','lightGray','lightGray'];
      }
    }
    if(keyWentDown("E")&&loopAtAnswerLeft+21<loopCount&&quizStartLoop!=loopCount){
      loopAtAnswerLeft=loopCount;
      totalQuestionsLeft++;
      if(totalQuestionsLeft==11){
        questionsAnsweredLeft = [
    false,false,false,false,
    false,false,false,false,
    false,false,false
    ];
    totalQuestionsLeft=1;
      }
      //if answer is correct
      if(quizHoverLeft==quizAnswers[randomQuestionLeft]){
        quizColorsLeft[quizHoverLeft-1]='lightGreen';
        educationLevelLeft.setAnimation("book");
        educationLevelLeft.scale=0.09;
        //if answer is incorrect
      }else{
        quizColorsLeft[quizHoverLeft-1]=rgb(255,200,200);
      }
        }
        //wait half a second to show result, then switch to next question
      if(loopAtAnswerLeft+20==loopCount){
          if(quizHoverLeft==quizAnswers[randomQuestionLeft])(educationProgressLeft+=0.105);
          quizColorsLeft[quizHoverLeft-1]='white';
          questionsAnsweredLeft[randomQuestionLeft]=true;
          //find new random question
          randomQuestionLeft=randomNumber(0,10);
          while(questionsAnsweredLeft[randomQuestionLeft]){
            randomQuestionLeft=randomNumber(0,10);
          }
      }
    }else if(educationProgressLeft>=1){
      educationLevelLeft.setAnimation("gradHat");
      educationLevelLeft.scale=0.035;
     if(lTouchingJob){ lTouchingJob=false;jobProgressLeft=0;}          
  }
  
  }else if((charBoxLeft.isTouching(jobSprites[0]))){
    advocacyFunctions(0);
  }else if((charBoxLeft.isTouching(jobSprites[1]))){
    advocacyFunctions(1);
  }
  
  //Offer collisions
  else if(charBoxLeft.isTouching(offer1)){
    offerMenu(1);
  }else if(charBoxLeft.isTouching(offer2)){
    offerMenu(2);
  }else if(charBoxLeft.isTouching(offer3)){
    offerMenu(3);
  }
  //}
  
  //Trash collisions
  else if((checkTrashCollisions())){
    if(menuOpenLeft)(closeMenu());
    //char is contacting a trash sprite and clean up is active
    if(!lTouchingJob){
      jobProgressLeft+=0.01;
      lTouchingJob=true;
      closeMenu();
    }
    if(keyDown("e")){
      jobProgressLeft+=0.06;
    }
    //if the task is done
    if((jobProgressLeft>=1)){
      trashPickedUp++;
      trash[trashCollisionNum].x=-50;trash[trashCollisionNum].y=-50;
      openCULocations[trashPositions[trashCollisionNum]]=true;
      trashPositions[trashCollisionNum]=-1;
      jobProgressLeft=0;
    }
    
  }  
  
  
  //land collisions{
  else if(charBoxLeft.isTouching(green1HB)&&(!parksCompleted[0])){
    if(cFunding>=20000){
      var colorFactor = ((Math.abs(12-(loopCount%24)))*5);
      g1Indicator.shapeColor=rgb(210-colorFactor,210-colorFactor,210+colorFactor,1);
    }else{
      g1Indicator.shapeColor="white";
    }
    fill('black');textSize(17); noStroke();textAlign(CENTER,CENTER);
    openT4Menu(1);
    //set header to color depending on if they can afford it
        if(cFunding>=20000){
        shareHeader.shapeColor=rgb(110,220,115);
      }else{
        shareHeader.shapeColor=rgb(220,110,115);
      }
      
      text("[E]\tNorth Park\nCost: $20,000\nFunds: $"+cFunding,200,343);
      
      //check to invest in park
    if(keyWentDown("E")&&(!parksCompleted[0])&&(cFunding>=20000)){
        g1Indicator.shapeColor=rgb(100,100,220);
        parksCompleted[0]=true;
        cFunding-=20000;
        green1.setAnimation("park1");
        plotsCompletedLeft++;
      }
      oldPosition=[4,1];
    if(lTouchingJob){ lTouchingJob=false;jobProgressLeft=0;}
  }else if((charBoxLeft.isTouching(green4HB)||(charBoxLeft.isTouching(green4HB2)))&&(!parksCompleted[1])){
    if(cFunding>=100000){
      var colorFactor2 = ((Math.abs(12-(loopCount%24)))*5);
    g4Indicator.shapeColor=rgb(210-colorFactor2,210-colorFactor2,210+colorFactor2,1);
    }else{
      g4Indicator.shapeColor="white";
    }
    
    fill('black');textSize(17); noStroke();textAlign(CENTER,CENTER);
    openT4Menu(4);
    //set header to color depending on if they can afford it
        if(cFunding>=100000){
        shareHeader.shapeColor=rgb(110,220,115);
      }else{
        shareHeader.shapeColor=rgb(220,110,115);
      }
      
      text("[E]\tCentral Park\nCost: $100,000\nFunds: $"+cFunding,200,343);
      
      //check to invest in park
    if(keyWentDown("E")&&(!parksCompleted[1])&&(cFunding>=100000)){
        g4Indicator.shapeColor=rgb(100,100,220);
        parksCompleted[1]=true;
        cFunding-=100000;
        green4.setAnimation("t3Park1");
        green3.setAnimation("t3Alleyway1");
        plotsCompletedLeft+=2;
      }
      oldPosition=[4,4];
    if(lTouchingJob){ lTouchingJob=false;jobProgressLeft=0;}
  }else if(charBoxLeft.isTouching(t1Land[8])&&!t1PlotIsCompleted[8]){
    openT1Menu(8);
    t1Functions(8);
     if(lTouchingJob){ lTouchingJob=false;jobProgressLeft=0;}
  }else if(charBoxLeft.isTouching(t1Land[7])&&!t1PlotIsCompleted[7]){
    openT1Menu(7);
    t1Functions(7);
     if(lTouchingJob){ lTouchingJob=false;jobProgressLeft=0;}
  }else if(charBoxLeft.isTouching(t1Land[6])&&!t1PlotIsCompleted[6]){
    openT1Menu(6);
    t1Functions(6);
     if(lTouchingJob){ lTouchingJob=false;jobProgressLeft=0;}
  }else if(charBoxLeft.isTouching(t1Land[5])&&!t1PlotIsCompleted[5]){
    openT1Menu(5);
    t1Functions(5);
     if(lTouchingJob){ lTouchingJob=false;jobProgressLeft=0;}
  }else if(charBoxLeft.isTouching(t1Land[4])&&!t1PlotIsCompleted[4]){
    openT1Menu(4);
    t1Functions(4);
     if(lTouchingJob){ lTouchingJob=false;jobProgressLeft=0;}
  }else if(charBoxLeft.isTouching(t1Land[3])&&!t1PlotIsCompleted[3]){
    openT1Menu(3);
    t1Functions(3);
     if(lTouchingJob){ lTouchingJob=false;jobProgressLeft=0;}
  }else if(charBoxLeft.isTouching(t1Land[2])&&!t1PlotIsCompleted[2]){
    openT1Menu(2);
    t1Functions(2);
     if(lTouchingJob){ lTouchingJob=false;jobProgressLeft=0;}
  }else if(charBoxLeft.isTouching(t1Land[1])&&!t1PlotIsCompleted[1]){
    openT1Menu(1);
    t1Functions(1);
     if(lTouchingJob){ lTouchingJob=false;jobProgressLeft=0;}
  }else if(charBoxLeft.isTouching(t1Land[0])&&!t1PlotIsCompleted[0]){
    openT1Menu(0);
    t1Functions(0);
     if(lTouchingJob){ lTouchingJob=false;jobProgressLeft=0;}
  }
  else
  //tier 2 plots
  if(charBoxLeft.isTouching(t2Land[1])&&!t2PlotIsCompleted[1]){
    if(educationOpenLeft)(closeEducationLeft());
    openT2Menu(1);
    t2Functions(1);
     if(lTouchingJob){ lTouchingJob=false;jobProgressLeft=0;}
  }else if(charBoxLeft.isTouching(t2Land[2])&&!t2PlotIsCompleted[2]){
    if(educationOpenLeft)(closeEducationLeft());
    openT2Menu(2);
    t2Functions(2);
     if(lTouchingJob){ lTouchingJob=false;jobProgressLeft=0;}
  }
  //tier 3 plots
 else if(charBoxLeft.isTouching(t3Land[0])&&!t3PlotIsCompleted[0]){
    openT3Menu(0);
    t3Functions(0);
     if(lTouchingJob){ lTouchingJob=false;jobProgressLeft=0;}
  }else if(charBoxLeft.isTouching(t3Land[1])&&!t3PlotIsCompleted[1]){
    openT3Menu(1);
    t3Functions(1);
     if(lTouchingJob){ lTouchingJob=false;jobProgressLeft=0;}
  }else if(menuOpenLeft){
    closeMenu();
    if(lTouchingJob){ lTouchingJob=false;jobProgressLeft=0;}
  }else if(offerOpen){
    shareHeader.visible=false;
    offerOpen=false;
    if(lTouchingJob){ lTouchingJob=false;jobProgressLeft=0;}
  }else if(educationOpenLeft){
   closeEducationLeft(); 
  }else if(lTouchingJob){
    lTouchingJob=false; jobProgressLeft=0;
  }
  //}
  
  noStroke();fill("black");
  textFont('tahoma');textAlign(CENTER, CENTER);
  strokeWeight(0.5);textSize(23);
  
  vehicleMovement();
    
  //CLDC info text{
  if(!educationOpenLeft){
  fill('black');textSize(15);
  text("Education:",45,324);
  textSize(16);
  text("Profit:",345,320);
  text("Loans:",345,362);
  text("$"+cLoans,345,383);
  text("$"+cIncome,345,341);
  //player dividends text
  text("Dividends:",57,362);
  text("$"+dividends,57,383);
  //Dividing lines for menu interface
  stroke("Black");strokeWeight(3);
  line(5,340,110,340);
  }
  //}
  stroke("Black");strokeWeight(0.5);
  //Job progress bar{
  if(jobProgressLeft!=0){
    rect(25,268,150,25);
    fill('white');
    rect(28,271,144,19);
    fill('lightGreen');
    rect(28,271,144*jobProgressLeft,19);
    fill('black');textSize(15);
    text(progressMessageLeft,100,281);
}
//}

  //Trash info bar{
    if(cleanUpActive){
      textSize(15);
      strokeWeight(0.5);
      fill("black");
    rect(200,268,190,25);
    fill("white");
    rect(203,271,95,19);
    fill(rgb(180,255,180));
    rect(302,271,85,19);
    fill("black");
    text("QTY: "+trashPickedUp,237,281);
    text("-->",285,281);
    text("$"+(trashPickedUp*500)+" [F]",345,281);
    //clean up message
    if(cleanUpLoop==loopCount-1){
      cleanUpSprites.setVisibleEach(true);
    }else if(cleanUpLoop+60>loopCount){
      fill("black");textSize(16);
      text("A Community Clean-Up Event Has Started!",200,120);
      text("You can now clear the trash\nlittering your community!",220,155);
    }else if(cleanUpLoop+60==loopCount){
      cleanUpSprites.setVisibleEach(false);
    }
    }
    
  //}
  

//Vote info bar & clean up initialization{
if(voteData[0]!="none"){
  
  //spawn voting sprites
  if(lJobCooldown+120==loopCount){
    if(jobLocations[0]==-1){
    placeVotingSprite(0);
  }else if(jobLocations[1]==-1){
    placeVotingSprite(1);
  }
}
  //graphics
  strokeWeight(0.5);
    rect(210,268,180,25);
    fill(rgb(255,170,170));
    rect(213,271,134,19);
    fill(rgb(170,255,170));
    rect(213,271,134*(voteData[2]/100),19);
    fill('black');textSize(15);
    text("For           Against",280,281);
    fill("white");
    rect(351,271,35,19);
    fill("black");
    var timeLeft = 30-Math.round((loopCount-voteLoop)/30);
    //spacebar to skip timer
    if(keyWentDown("space")){
      timeLeft=0;
    }
    text(timeLeft,368,281);
    stroke("black");strokeWeight(3);
    line(280,271,280,273.5);
    line(280,290,280,287);
    //start the voting cutscreen
  if(timeLeft==0){
    if(loopCount%60==0){
      loopCount++;
      }
      //reset voting sprites
      jobLocations=[-1,-1,-1,-1,-1,-1];
      lJobCooldown=loopCount;
      jobSprites[0].x=-50;jobSprites[0].y=-50;
      jobSprites[1].x=-50;jobSprites[1].y=-50;
      streetsOpen= [
  true,true,true,true,true,//left street
  true,true,true,true,true,//right street
  false,true,true,false,true,true,//mid horiz street
  ];
      
    //end the pre-voting period
    voteData[0]="none";
    votingLoop=loopCount;
    loopCopy=loopCount;
    if(isChar1){
      leftChar.setAnimation("leftDown");
    }else{
      leftChar.setAnimation("rightDown");
    }
    leftChar.setVelocity(0,0);
    pauseMainFunctions=true;
  }
}
//listens for f key press and switches to clean up mode
else if(keyWentDown("f")){
  if(cleanUpActive){
    resetCleanUp();
  }else{
    cleanUpActive=true;
    progressMessageLeft="[E] Remove Trash";
    //begin showing message to start clean up 
    cleanUpLoop=loopCount;
  }
}

//}



  noStroke();textFont('tahoma');textSize(24);
  fill("black");
  //move money counter after updating it{
  if(!menuOpenLeft&&!offerOpen&&!educationOpenLeft){
  if(cMoneyUpdateCount+2>loopCount){
  text("$"+cFunding,200,373);
  } else{
    text("$"+cFunding,200,376);
  } 
  }
  //}
 
  //dollar sign when money is updated{
  if(!educationOpenLeft){
  fill("forestGreen");textSize(16);
  stroke(rgb(20,140,71));strokeWeight(1);
  if(cMoneyUpdateCount+15>loopCount){
  text("+$",leftChar.x,leftChar.y-10+(cMoneyUpdateCount-loopCount));
  }
  }
  //}
  
  //finish construction after 3 sec cooldown
  for(var op = 0;op<3;op++){
    if(offerBuildCooldowns[op]+90==loopCount){
      var location = offerLocations[op];
      if(location>=0&&location<=11){
        replaceT1Plot(location,1);
        buildRoads(1,location,false);
      }else if(location>=12&&location<=17){
        replaceT2Plot(location-12,1);
        buildRoads(2,location-12,false);
      }else if(location>=18&&location<=19){
        replaceT3Plot(location-18,1);
        buildRoads(3,location-18,false);
      }
      offerLocations[op]=-1;
      cIncome+=offerIncome[op];
      offerIncome[op]=0;
      offersAvailable[op]=true;
    }
  }
  
  //voting cutscreen{
  var cutTimeLeft = loopCopy-votingLoop;
    if(cutTimeLeft<=265){
      loopCopy++;
      //draw background
      fill(rgb(255,255,255,0.85));strokeWeight(2);stroke("black");
      rect(10,45,380,195);
      fill(rgb(220,230,255));strokeWeight(1);
      rect(30,55,340,30);
      fill("black");textSize(22);strokeWeight(0.3);
      
      text("Voting Results:",200,70);
      strokeWeight(1);
      if(cutTimeLeft>45){
        fill(rgb(150,255,150));
        arc(200,140,100,100,-90,(voteData[2]*3.6)-90);
        fill(rgb(255,150,150));
        arc(200,140,100,100,(voteData[2]*3.6)-90,-90);
        if(cutTimeLeft>75){
          fill("forestGreen");textSize(18);stroke('forestgreen');
          strokeWeight(0.4);
          text("CLDC Members\nin Favor:\n"+voteData[2]+"%",320,140);
          fill("darkRed");stroke('darkred');
          text("CLDC Members\nin Opposition:\n"+(100-voteData[2])+"%",80,140);
          if(cutTimeLeft>120){
            textSize(16);strokeWeight(0.1);
            if(voteData[2]>50){
              fill("forestGreen");stroke("forestGreen");
              text("A majority voted in favor of the offer.\nConstruction will begin in the plot shortly.",200,215);
            }else{
              fill("darkred");stroke("darkred");
              text("A majority was not in favor of the offer.\nThe plot will remain open to new offers.",200,215);
            }
          }
        }
      }
      if(cutTimeLeft==265){
        offerOpen=false;shareHeader.visible=false;
       pauseMainFunctions=false; 
       var offer;
       var count;
       if(voteData[1]=="1"){
         offer=offer1;
         count=0;
       }else if(voteData[1]=="2"){
         offer=offer2;
         count=1;
       }else if(voteData[1]=="3"){
         offer=offer3;
         count=2;
       }
       var aLocation = offerLocations[count];
       if(voteData[2]>50){
           offer.setAnimation("construction");
           offerIsConstruction[count]=true;
           if(aLocation>=0&&aLocation<=11){
             buildRoads(1,aLocation,true);
           }else if(aLocation>=12&&aLocation<=17){
             buildRoads(2,aLocation-12,true);
           }else if(aLocation>=18&&aLocation<=19){
             buildRoads(3,aLocation-18,true);
           }
           
       }else{
          offer.x=-50;
          offer.y=-50;
          offerIncome[count]=0;
          offersAvailable[count]=true;
          if(aLocation>=0&&aLocation<=11){
            t1LandIsOpen[aLocation]=true;
          }else if(aLocation>=12&&aLocation<=17){
            t2LandIsOpen[aLocation-12]=true;
          }else if(aLocation>=18&&aLocation<=19){
            t3LandIsOpen[aLocation-18]=true;
          }
          offerLocations[count]=-1;
       }
       voteData=["none","0",50];
      }
    }
  //}
  
  //return to main menu if backspace is pressed
      if(keyWentDown("BACKSPACE")){
      resetGame();
    }
  }
  //end game screen
  else if(level==3){
    background(rgb(230,230,230));
    drawSprites();
    textAlign('center','center');
    textSize(40);
    if(winner==1){
      fill(110,220,115);strokeWeight(4);stroke('black');
      rect(4,4,392,70);
      if(mouseIsOver(tutorialSprites[5])){
        fill(130,240,135);    
      }
      rect(130,355,140,30);
      fill('black');noStroke();
      text('You Have Won!',200,45);
       fill('black');textSize(25);
    text('Main Menu',200,372);
    }else if(winner==2){
      strokeWeight(4);stroke('black');
      rect(4,4,392,70);
      if(mouseIsOver(tutorialSprites[5])){
        fill(240,130,135);    
      }
      rect(130,355,140,30);
      fill('black');noStroke();
      text('You Have Lost!',200,45);
       fill('black');textSize(25);
    text('Main Menu',200,372);
    }
      
    fill('white');strokeWeight(2);stroke('black');
    rect(30,133,340,35);
    fill('black');noStroke();
    if(gameplayTime>60){
      text('Time Elapsed:\n'+Math.round(gameplayTime/60)+" Minute(s), "+(gameplayTime%60)+" Seconds",200,135);
    }else{
      text('Time Elapsed:\n'+(gameplayTime%60)+" Seconds",200,135);
    }
    textAlign('left','center');textSize(19);
    text("End text here",20,255);
    if(mousePressedOver(tutorialSprites[5])){
      resetGame();
    }
  }
}
//functions{
//sprite movement for both characters with animations
function spriteMovement(speed) {
  var sideAnimation = false;
  var animationSpeed;
  var character;
      animationSpeed = "Walk";
    if(isChar1){
      character="left";
    }else{
      character="right";
    }
    if (keyDown("a")){
    leftChar.velocityX = -speed;
    leftChar.setAnimation(character+animationSpeed+'Left');
    sideAnimation=true;
    }
    else if (keyDown("d")){
    leftChar.velocityX = speed;
    leftChar.setAnimation(character+animationSpeed+'Right');
     sideAnimation=true;
    }
    else if(keyWentUp("a")){
      leftChar.velocityX = 0;
      leftChar.setAnimation(character+'Left');
       sideAnimation=false;
    }
    else if(keyWentUp("d")){
      leftChar.velocityX = 0;
     leftChar.setAnimation(character+'Right');
      sideAnimation=false;
    }
     if (keyDown("w")){
    leftChar.velocityY = -speed;
    if(!sideAnimation){
    leftChar.setAnimation(character+animationSpeed+'Up');
    }
    }
    else if (keyDown("s")){
    leftChar.velocityY = speed;
    if(!sideAnimation){
    leftChar.setAnimation(character+animationSpeed+'Down');
    }
    }
    else if(keyWentUp("w")){
      leftChar.velocityY = 0;
      if(!sideAnimation){
      leftChar.setAnimation(character+'Up');
      }
    }
    else if(keyWentUp("s")){
      leftChar.velocityY = 0;
       if(!sideAnimation){
     leftChar.setAnimation(character+'Down');
       }
    }
}
//opens the share-investing menu for t1 plots
function openT1Menu(plot){
  if(!menuOpenLeft||!((oldPosition[0]==1)&&(oldPosition[1]==plot))){
  //visibility statements
   leftBackground.visible=shareHeader.visible=true;
   offerOpen=false;
   t3LeftIndicators.setVisibleEach(false);
    t2LeftIndicators.setVisibleEach(false);
    g1Indicator.visible=false;
    g4Indicator.visible=false;
   //place share indicators and color them based on data
    t1LeftIndicators.setVisibleEach(true);
    for(var k=0;k<3;k++){
           if(t1Shares[plot][k]==0)(t1LeftIndicators[k].shapeColor='white');
      else if(t1Shares[plot][k]==1)(t1LeftIndicators[k].shapeColor=rgb(100,100,220));
      else if(t1Shares[plot][k]==2)(t1LeftIndicators[k].shapeColor=rgb(220,100,220));
    }
    //update the zeroLocation for this plot
    for(var w=0;w<3;w++){
        if(t1Shares[plot][w]==0){
          t1ZeroIndexes[plot]=w;
          break;
        }
      }
    menuOpenLeft=true;
  }
}
//opens the share-investing menu for t2 plots
function openT2Menu(plot){
  if(!menuOpenLeft||!((oldPosition[0]==2)&&(oldPosition[1]==plot))){
  //visibility statements
   leftBackground.visible=shareHeader.visible=true;
   offerOpen=false;
   t3LeftIndicators.setVisibleEach(false);
    t1LeftIndicators.setVisibleEach(false);
    g1Indicator.visible=false;
    g4Indicator.visible=false;
   t2LeftIndicators.setVisibleEach(true);
    for(var x=0;x<5;x++){
      if(t2Shares[plot][x]==0){
        t2LeftIndicators[x].shapeColor='white';
      }else if(t2Shares[plot][x]==1){
        t2LeftIndicators[x].shapeColor=rgb(100,100,220);
  
      }else if(t2Shares[plot][x]==2){
        t2LeftIndicators[x].shapeColor=rgb(220,100,220);
      }
    }
    //update zero location
      for(var y=0;y<5;y++){
        if(t2Shares[plot][y]==0){
          t2ZeroIndexes[plot]=y;
          break;
        }
      }
    menuOpenLeft=true;
  }
}
//opens the share-investing menu for t3 plots
function openT3Menu(plot){
  if(!menuOpenLeft||!((oldPosition[0]==3)&&(oldPosition[1]==plot))){
  //visibility statements
   leftBackground.visible=shareHeader.visible=true;
   offerOpen=false;
    t2LeftIndicators.setVisibleEach(false);
    t1LeftIndicators.setVisibleEach(false);
    g1Indicator.visible=false;
    g4Indicator.visible=false;
   t3LeftIndicators.setVisibleEach(true);
    for(var t=0;t<7;t++){
      if(t3Shares[plot][t]==0){
        t3LeftIndicators[t].shapeColor='white';
      }else if(t3Shares[plot][t]==1){
        t3LeftIndicators[t].shapeColor=rgb(100,100,220);
      }else if(t3Shares[plot][t]==2){
        t3LeftIndicators[t].shapeColor=rgb(220,100,220);
      }
    }
    //update zero location
    for(var d=0;d<7;d++){
        if(t3Shares[plot][d]==0){
         t3ZeroIndexes[plot]=d;
         break;
        }
      }
    menuOpenLeft=true;
  }
}
//opens the share-investing menu for parks
function openT4Menu(plot){
  if(!menuOpenLeft||!((oldPosition[0]==4)&&(oldPosition[1]==plot))){
  //visibility statements
   leftBackground.visible=shareHeader.visible=true;
   offerOpen=false;
   t3LeftIndicators.setVisibleEach(false);
    t2LeftIndicators.setVisibleEach(false);
    t1LeftIndicators.setVisibleEach(false);
  if(plot==1){
      g1Indicator.visible=true;
    }else if(plot==4){
      g4Indicator.visible=true;
    }
    menuOpenLeft=true;
    }
  }
//functions for t1 plots
function t1Functions(plot){
  if(cFunding>=5000){
   var colorFactor = ((Math.abs(12-(loopCount%24)))*5);
  t1LeftIndicators[t1ZeroIndexes[plot]].shapeColor=rgb(210-colorFactor,210-colorFactor,210+colorFactor,1); 
  }
  fill('black');textSize(17); noStroke();textAlign(CENTER,CENTER);
  if(cFunding>=5000){
        shareHeader.shapeColor=rgb(110,220,115);
      }else{
        shareHeader.shapeColor=rgb(220,110,115);
      }
         text("[E]\tTier 1 Land Plot\nCost: $5,000 / share\nFunds: $"+cFunding,200,343);
    if(keyWentDown("E")){
    if(!t1PlotIsCompleted[plot]&&cFunding>=5000){
      cFunding-=5000;
      t1Shares[plot][t1ZeroIndexes[plot]]=1;
      //if all shares are bought
      if(t1ZeroIndexes[plot]==2){
        t1PlotIsCompleted[plot]=true;
        plotsCompletedLeft++;
      //color green before building is placed
      t1Land[plot].shapeColor=rgb(60,130,5);
      }
    }
    for(var c=0;c<3;c++){
           if(t1Shares[plot][c]==0)(t1LeftIndicators[c].shapeColor='white');
      else if(t1Shares[plot][c]==1)(t1LeftIndicators[c].shapeColor=rgb(100,100,220));
    }
    //update the zeroLocation for this plot
      for(var w=0;w<3;w++){
        if(t1Shares[plot][w]==0){
          t1ZeroIndexes[plot]=w;
          break;
        }
      }
      }
      oldPosition=[1,plot];
}
//functions for t2 plots
function t2Functions(plot){
  if(cFunding>=10000){
    var colorFactor = ((Math.abs(12-(loopCount%24)))*5);
    t2LeftIndicators[t2ZeroIndexes[plot]].shapeColor=rgb(210-colorFactor,210-colorFactor,210+colorFactor,1);
  }
  fill('black');textSize(17); noStroke();textAlign(CENTER,CENTER);
      if(cFunding>=10000){
        shareHeader.shapeColor=rgb(110,220,115);
      }else{
        shareHeader.shapeColor=rgb(220,110,115);
      }
       text("[E]\tTier 2 Land Plot\nCost: $10,000 / share\nFunds: $"+cFunding,200,343);
    if(keyWentDown("E")){
    if(!t2PlotIsCompleted[plot]&&cFunding>=10000){
        cFunding-=10000;
        t2Shares[plot][t2ZeroIndexes[plot]]=1;
        //if all shares are bought
      if(t2ZeroIndexes[plot]==4){
        plotsCompletedLeft++;
        t2PlotIsCompleted[plot]=true;
       //color green before building is placed
        t2Land[plot].shapeColor=rgb(60,130,5);
      }
    }
    for(var v=0;v<5;v++){
           if(t2Shares[plot][v]==0)(t2LeftIndicators[v].shapeColor='white');
      else if(t2Shares[plot][v]==1)(t2LeftIndicators[v].shapeColor=rgb(100,100,220));
    }
    //update zero location
      for(var y=0;y<5;y++){
        if(t2Shares[plot][y]==0){
          t2ZeroIndexes[plot]=y;
          break;
        }
      }
      }
      oldPosition=[2,plot];
}
//functions for t3 plots
function t3Functions(plot){
  if(cFunding>40000){
    var colorFactor = ((Math.abs(12-(loopCount%24)))*5);
    t3LeftIndicators[t3ZeroIndexes[plot]].shapeColor=rgb(210-colorFactor,210-colorFactor,210+colorFactor,1);
  }
  fill('black');textSize(17); noStroke();textAlign(CENTER,CENTER);
      if(cFunding>=40000){
        shareHeader.shapeColor=rgb(110,220,115);
      }else{
        shareHeader.shapeColor=rgb(220,110,115);
      }
      text("[E]\tTier 3 Land Plot\nCost: $40,000 / share\nFunds: $"+cFunding,200,343);
    if(keyWentDown("E")){
      if(!t3PlotIsCompleted[plot]&&cFunding>=40000){
      
        cFunding-=40000;
        t3Shares[plot][t3ZeroIndexes[plot]]=1;
        //if all shares are bought
      if(t3ZeroIndexes[plot]==6){
        plotsCompletedLeft++;
        t3PlotIsCompleted[plot]=true;
      //color green before building is placed
        t3Land[plot].shapeColor=rgb(60,130,5);
      }
    }
    for(var b=0;b<7;b++){
           if(t3Shares[plot][b]==0)(t3LeftIndicators[b].shapeColor='white');
      else if(t3Shares[plot][b]==1)(t3LeftIndicators[b].shapeColor=rgb(100,100,220));
    }
      //update zero location
    for(var d=0;d<7;d++){
        if(t3Shares[plot][d]==0){
         t3ZeroIndexes[plot]=d;
         break;
        }
      }
    }
    oldPosition=[3,plot];
}
//makes roads visible when shares are sold out
function buildRoads(tier,plot,construction){
  if(!construction){
  if(tier == 1){
    if(plot==0){
      streets[0].setAnimation("bridgeVert1");streets[1].setAnimation("streetVert1");
      streetsFinished[0]=streetsFinished[1]=true;
    }else if(plot==1){
      streets[0].setAnimation("bridgeVert1");streets[1].setAnimation("streetVert1");
      streets[2].setAnimation("intersectionLeft1");
      streetsFinished[0]=streetsFinished[1]=streetsFinished[2]=true;
    }else if(plot==2){
      streets[3].setAnimation("streetVert1");streets[4].setAnimation("streetVert3");
      streetsFinished[3]=streetsFinished[4]=true;
    }else if(plot==3){
      streets[4].setAnimation("streetVert3");
      streetsFinished[4]=true;
      //change t1park animation to look nice
      green5.setAnimation("t1Park1");
    }else if(plot==4){
      streets[5].setAnimation("bridgeVert1");streets[6].setAnimation("streetVert1");
      streetsFinished[5]=streetsFinished[6]=true;
    }else if(plot==5){
      streets[5].setAnimation("bridgeVert1");streets[6].setAnimation("streetVert1");
      streets[7].setAnimation("intersectionRight1");
      streetsFinished[5]=streetsFinished[6]=streetsFinished[7]=true;
    }else if(plot==6){
      streets[8].setAnimation("streetVert1");streets[9].setAnimation("streetVert4");
      streetsFinished[8]=streetsFinished[9]=true;
    }else if(plot==7){
     streets[9].setAnimation("streetVert4");
     streetsFinished[9]=true;
     //change t1park animation to look nice
      green6.setAnimation("t1Park1");
    }else if(plot==8){
      streets[0].setAnimation("bridgeVert1");streets[1].setAnimation("streetVert1");
      streets[2].setAnimation("intersectionLeft1");streets[10].setAnimation("streetHoriz1");
      streetsFinished[0]=streetsFinished[1]=streetsFinished[2]=streetsFinished[10]=true;
    }
  }else if(tier == 2){
    if(plot==1){
      streets[0].setAnimation("bridgeVert1");streets[1].setAnimation("streetVert1");
      streets[2].setAnimation("intersectionLeft1");streets[10].setAnimation("streetHoriz1");
      streets[11].setAnimation("streetHoriz1");streets[12].setAnimation("streetHoriz1");
      streets[13].setAnimation("streetHoriz1");
      streetsFinished[0]=streetsFinished[1]=streetsFinished[2]=streetsFinished[10]=
      streetsFinished[11]=streetsFinished[12]=streetsFinished[13]=true;
    }else if(plot==2){
    streets[5].setAnimation("bridgeVert1");streets[6].setAnimation("streetVert1");
      streets[7].setAnimation("intersectionRight1");streets[14].setAnimation("streetHoriz1");
      streets[15].setAnimation("streetHoriz1");
      streetsFinished[5]=streetsFinished[6]=streetsFinished[7]=streetsFinished[14]=
      streetsFinished[15]=true;
    }
  }else if(tier == 3){
    if(plot==0){
      streets[2].setAnimation("intersectionLeft1");streets[3].setAnimation("streetVert1");
      streets[4].setAnimation("streetVert3"); streets[10].setAnimation("streetHoriz1");
      streets[11].setAnimation("streetHoriz1");streets[12].setAnimation("streetHoriz1");
      streetsFinished[2]=streetsFinished[3]=streetsFinished[4]=streetsFinished[10]=
      streetsFinished[11]=streetsFinished[12]=true;
    }else if(plot==1){
      streets[7].setAnimation("intersectionRight1");streets[8].setAnimation("streetVert1");
      streets[9].setAnimation("streetVert4");streets[13].setAnimation("streetHoriz1");
      streets[14].setAnimation("streetHoriz1");streets[15].setAnimation("streetHoriz1");
      streetsFinished[7]=streetsFinished[8]=streetsFinished[9]=streetsFinished[13]=
      streetsFinished[14]=streetsFinished[15]=true;
    }
  }
  }else{ //for construction
    if(tier == 1){
    if(plot==0){
      if(!streetsFinished[0])(streets[0].setAnimation("bridgeVertCon"));
      if(!streetsFinished[1])(streets[1].setAnimation("streetVertCon"));
    }else if(plot==1){
      if(!streetsFinished[0])(streets[0].setAnimation("bridgeVertCon"));
      if(!streetsFinished[1])(streets[1].setAnimation("streetVertCon"));
      if(!streetsFinished[2])(streets[2].setAnimation("intersectionLeftCon"));
    }else if(plot==2){
      if(!streetsFinished[3])(streets[3].setAnimation("streetVertCon"));
      if(!streetsFinished[4])(streets[4].setAnimation("streetVertCon"));
    }else if(plot==3){
      if(!streetsFinished[4])(streets[4].setAnimation("streetVertCon"));
    }else if(plot==4){
      if(!streetsFinished[5])(streets[5].setAnimation("bridgeVertCon"));
      if(!streetsFinished[6])(streets[6].setAnimation("streetVertCon"));
    }else if(plot==5){
      if(!streetsFinished[5])(streets[5].setAnimation("bridgeVertCon"));
      if(!streetsFinished[6])(streets[6].setAnimation("streetVertCon"));
      if(!streetsFinished[6])(streets[7].setAnimation("intersectionRightCon"));
    }else if(plot==6){
      if(!streetsFinished[8])(streets[8].setAnimation("streetVertCon"));
      if(!streetsFinished[9])(streets[9].setAnimation("streetVertCon"));
    }else if(plot==7){
     if(!streetsFinished[9])(streets[9].setAnimation("streetVertCon"));
    }else if(plot==8){
      if(!streetsFinished[0])(streets[0].setAnimation("bridgeVertCon"));
      if(!streetsFinished[1])(streets[1].setAnimation("streetVertCon"));
      if(!streetsFinished[2])(streets[2].setAnimation("intersectionLeftCon"));
      if(!streetsFinished[10])(streets[10].setAnimation("streetHorizCon"));
    }
  }else if(tier == 2){
    if(plot==1){
      if(!streetsFinished[0])(streets[0].setAnimation("bridgeVertCon"));
      if(!streetsFinished[1])(streets[1].setAnimation("streetVertCon"));
      if(!streetsFinished[2])(streets[2].setAnimation("intersectionLeftCon"));
      if(!streetsFinished[10])(streets[10].setAnimation("streetHorizCon"));
      if(!streetsFinished[11])(streets[11].setAnimation("streetHorizCon"));
      if(!streetsFinished[12])(streets[12].setAnimation("streetHorizCon"));
      if(!streetsFinished[13])(streets[13].setAnimation("streetHorizCon"));
    }else if(plot==2){
   if(!streetsFinished[5])(streets[5].setAnimation("bridgeVertCon"));
      if(!streetsFinished[6])(streets[6].setAnimation("streetVertCon"));
      if(!streetsFinished[7])(streets[7].setAnimation("intersectionRightCon"));
      if(!streetsFinished[14])(streets[14].setAnimation("streetHorizCon"));
      if(!streetsFinished[15])(streets[15].setAnimation("streetHorizCon"));
    }
  }else if(tier == 3){
    if(plot==0){
      if(!streetsFinished[2])(streets[2].setAnimation("intersectionLeftCon"));
      if(!streetsFinished[3])(streets[3].setAnimation("streetVertCon"));
      if(!streetsFinished[4])(streets[4].setAnimation("streetVertCon"));
      if(!streetsFinished[10])(streets[10].setAnimation("streetHorizCon"));
      if(!streetsFinished[11])(streets[11].setAnimation("streetHorizCon"));
      if(!streetsFinished[12])(streets[12].setAnimation("streetHorizCon"));
    }else if(plot==1){
      if(!streetsFinished[6])(streets[7].setAnimation("intersectionRightCon"));
      if(!streetsFinished[8])(streets[8].setAnimation("streetVertCon"));
      if(!streetsFinished[9])(streets[9].setAnimation("streetVertCon"));
      if(!streetsFinished[13])(streets[13].setAnimation("streetHorizCon"));
      if(!streetsFinished[14])(streets[14].setAnimation("streetHorizCon"));
      if(!streetsFinished[15])(streets[15].setAnimation("streetHorizCon"));
    }
  }
  }
}
//closes menu
function closeMenu(){
      //visibility statements
    leftBackground.visible=shareHeader.visible=false;
    t3LeftIndicators.setVisibleEach(false);
    t2LeftIndicators.setVisibleEach(false);
    t1LeftIndicators.setVisibleEach(false);
    g1Indicator.visible=false;
    g4Indicator.visible=false;
    menuOpenLeft=false;
}
//closes the education screen
function closeEducationLeft(){
educationOpenLeft=false;
educationLevelLeft.visible=incomeRight.visible=
incomeBackRight.visible=loansRight.visible=loansBackRight.visible=
dividendsLeft.visible=dividendsBackLeft.visible=true;
}
//replaces t1 plots with building and roof
function replaceT1Plot(plot,player){
  t1Land[plot].visible=false; t1Buildings[plot].visible=t1Roofs[plot].visible=true;
  
  //set correct colors and animations
  if(randomNumber(0,1)==0){
    t1Buildings[plot].setAnimation("t1BuildingSide");
  }else{
    t1Buildings[plot].setAnimation("t1BuildingSide1");
  }
  t1Roofs[plot].shapeColor=rgb(220,220,220);
  
  t1BuildingPlaced[plot]=true;
  t1LandIsOpen[plot]=true;
  if(player==1)(p1CompleteSharesOwned[0]+=3);
  if(plot==10){
          green1.visible=true;
        }
  if(plot==11){
          green2.visible=true;
        }
}
//replaces t2 plots with building and roof
function replaceT2Plot(plot,player){
  t2Land[plot].visible=false; t2Buildings[plot].visible=t2Roofs[plot].visible=true;
  
  //set correct colors and animations
  if(plot==1){
    t2Buildings[plot].setAnimation("t2BuildingSide4");
  }else if(plot==2){
    t2Buildings[plot].setAnimation("t2BuildingSide");
  }
  t2Roofs[plot].shapeColor=rgb(220,220,220);
  
  t2BuildingPlaced[plot]=true;  
  t2LandIsOpen[plot]=true;
if(player==1)(p1CompleteSharesOwned[1]+=5);
}
//replaces t3 plots with building and roof
function replaceT3Plot(plot,player){
      t3Land[plot].visible=false;t3Buildings[plot].visible=
      t3Roofs[plot].visible=t3Roofs[plot+2].visible=t3Roofs[plot+4].visible=true;
      
      //set correct colors and animations
      t3Buildings[plot].setAnimation("t3BuildingSide");
      t3Roofs[plot].shapeColor=t3Roofs[plot+2]=t3Roofs[plot+4]=rgb(220,220,220);
      
      t3BuildingPlaced[plot]=true; 
      t3LandIsOpen[plot]=true;
if(player==1)(p1CompleteSharesOwned[2]+=7);
}
//calculations to place offers on map
function placeOffer(offer,count){
     var plotWasFound=false;
     var rLocation;
      //try to place the offer 3 times on t1 plots
      for(var o = 0;o<3;o++){
        rLocation = randomNumber(0,8);
        if(t1LandIsOpen[rLocation]&&t1PlotIsCompleted[rLocation]&&!t1BuildingPlaced[rLocation]){
          if(rLocation==0||rLocation==3||rLocation==6){
            offer.x=t1Land[rLocation].x;offer.y=t1Land[rLocation].y+10;
          }else{
            offer.x=t1Land[rLocation].x;offer.y=t1Land[rLocation].y;
          }
          offerIncome[count]=(randomNumber(60,180))*5;
          offersAvailable[count]=false;
          offerLocations[count]=rLocation;
          t1LandIsOpen[rLocation]=false;
          plotWasFound=true;
          break;
        }
      }
      
      //try to place the offer 1 time on t2 plots
      if(!plotWasFound){
        rLocation = randomNumber(1,2);
        if(t2LandIsOpen[rLocation]&&t2PlotIsCompleted[rLocation]&&!t2BuildingPlaced[rLocation]){
          if(rLocation==2){
            offer.x=t2Land[rLocation].x;offer.y=t2Land[rLocation].y+10;
          }else{
            offer.x=t2Land[rLocation].x;offer.y=t2Land[rLocation].y;
          }
          offerIncome[count]=(randomNumber(300,700))*5;
          offersAvailable[count]=false;
          t2LandIsOpen[rLocation]=false;
          offerLocations[count]=rLocation+12;
          plotWasFound=true;
        }
      }
      //try to place the offer 1 time on t3 plots
      if(!plotWasFound){
        rLocation = randomNumber(0,1);
        if(t3LandIsOpen[rLocation]&&t3PlotIsCompleted[rLocation]&&!t3BuildingPlaced[rLocation]){
         offer.x=t3Land[rLocation].x;offer.y=t3Land[rLocation].y;
         offerIncome[count]=(randomNumber(3200,5200))*5;
         t3LandIsOpen[rLocation]=false;
         offerLocations[count]=rLocation+18;
         offersAvailable[count]=false;
        }
      }
}
//User interface with offers
function offerMenu(offerNum){
  var offerIndex=offerNum-1;
  var offerTier;
    if(!offerOpen){
      closeMenu();
      shareHeader.visible=true;
      if(offerIsConstruction[offerIndex]){
        shareHeader.shapeColor=rgb(255,255,50);
      }else{
        shareHeader.shapeColor=rgb(150,155,240);
      }
      //intialize offerTier
      if(offerLocations[offerNum-1]<9)(offerTier=1);
      else if(offerLocations[offerIndex]==13||offerLocations[offerIndex]==14)(offerTier=2);
      else if(offerLocations[offerIndex]==18||offerLocations[offerIndex]==19)(offerTier=3);
       //"Rating" the offer
      var curIncome = offerIncome[offerIndex];
      if(offerTier==1){
        rateOffer(offerIndex,curIncome,500,700,800);
      }else if(offerTier==2){
        rateOffer(offerIndex,curIncome,2167,2834,3167);
      }else if(offerTier==3){
        rateOffer(offerIndex,curIncome,1334,16668,21334);
      }
      offerOpen=true;
    }
    if(offerIsConstruction[offerIndex]){
      
      fill("white");strokeWeight(1);stroke("black");
   rect(111,333,178,62);
    textSize(18);fill("black");noStroke();
    text("-- Construction --",200,323);
    text("[E] Complete",200,365);
    if(keyWentDown("e")&&!pauseMainFunctions){
      offerBuildCooldowns[offerNum-1]=loopCount;
      var offer;
      if(offerNum-1==0){
        offer = offer1;
      }else if(offerNum-1==1){
        offer = offer2;
      }else if(offerNum-1==2){
        offer=offer3;
      }
      offer.x=-50;offer.y=-50;offer.setAnimation("offer.png");
      offerIsConstruction[offerNum-1]=false;
    }
    
    }else{
    fill("white");strokeWeight(1);stroke("black");
    rect(111,333,178,62);
    textSize(18);fill("black");noStroke();
    text("-- Business Offer --",200,323);
    textSize(14);
    if(voteData[0]=="none"){
      text("Proposed Income: $"+offerIncome[offerIndex]+"\n\n[E] Support | [R] Oppose",200,365);
      
        //colored background for rating
        stroke(rgb(20,20,20));
        strokeWeight(2);
        fill(ratingColors[offerIndex]);
        rect(205,355,80,18);
      
        //text output
      fill("black");noStroke();
      text("Offer Rating:",160,365); 
      text(offerRatings[offerIndex],245,365);
      
      if(keyWentDown("e")&&!pauseMainFunctions){
        resetCleanUp();
      voteData[0] = "support";
      voteData[1] = offerNum+"";
      voteData[2] = randomNumber(160,240)/4;
      voteLoop=loopCount;
      //start spawning vote sprites
      lJobCooldown = loopCount-85;
      
    }else if(keyWentDown("r")&&!pauseMainFunctions){
      resetCleanUp();
      voteData[0] = "oppose";
      voteData[1] = offerNum+"";
      voteData[2] = randomNumber(160,240)/4;
      voteLoop=loopCount;
      //start spawning vote sprites
      lJobCooldown = loopCount-85;
    }
    }else if(offerNum+""!=voteData[1]){
      text("Finish the current vote first!\nAdvocate for support!",200,365);
    }else{
      textSize(16);
      text("This vote is in progress!\nPress [SPACE] to skip!",200,365);
    }
    }
}
//resets game and returns to main menu
function resetGame(){
  level=0;dividends=0;
       cLoans = 0; cIncome = 0;offerOpen=false;
       offer1.x=offer1.y=offer2.x=offer2.y=offer3.x=offer3.y=-50;
       offer1.setAnimation("offer.png");offer2.setAnimation("offer.png");offer3.setAnimation("offer.png");
       offer1.scale=offer2.scale=offer3.scale=0.3;
      cMoneyUpdateCount = -60;cFunding=0;
      winner=0;winLoop=-60; gameplayTime=0;
      loopCopy=0;
      job=1;
      quizStartLoop=-3600;
      pauseMainFunctions = false;
      leftChar.setVelocity(0,0);offerBuildCooldowns = [-3600,-3600,-3600];
      plotsCompletedLeft=0;voteData = ["none","0",50];voteLoop=-3600;votingLoop = -3600;
      oldPosition=[-1,-1];
      //clean-up data
      openCULocations = [
    true,true,true,true,true,true,true,
    true,true,true,true,true,true,true,
    true,true,true,true,true,true,true,
    true,true
    ];
    trashPositions = [
    -1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1
    ];
    cleanUpActive = false;
    trashCollisionNum = -1;
    trashPickedUp = 0;
    cleanUpLoop = -3600;
      for(var pp = 0;pp<10;pp++){
        trash[pp].x=-50;trash[pp].y=-50;
      }
      progressMessageLeft = '[E] Advocate';
      //reset offers
   offersAvailable = [true,true,true];
   offerIncome = [0,0,0];offerIsConstruction = [false,false,false];
   offerLocations = [-1,-1,-1];
offerRatings = ["","",""];
ratingColors = ["white","white","white"];

   //reset parks
   parksCompleted=[false,false];
   g1Indicator.shapeColor=g4Indicator.shapeColor=rgb(255,255,255);
g1Indicator.visible=g4Indicator.visible=false;
   
   //reset ships and cars
   carCooldown = -3600;
   carsAvailable=[true,true,true,true];
   ship.x=0;ship.y=-50;ship.velocityX=0;
   for(var carNumber=0;carNumber<4;carNumber++){
     cars[carNumber].x=0;
     cars[carNumber].y=-50;
   }
   cars.setVelocityEach(0,0);
   //Data of each share of each plot
  //0: Up for sale, 1: owned
  t1Shares = [[0,0,0],
  [0,0,0],[0,0,0],[0,0,0],
  [0,0,0],[0,0,0],[0,0,0],
  [0,0,0],[0,0,0]
  ];
  t2Shares = [
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]
];
  t3Shares = [
  [0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
  
  t1ZeroIndexes = [0,0,0,0,0,0,0,0,0];
  t2ZeroIndexes = [0,0,0];
  t3ZeroIndexes = [0,0]; 
  
  //Data if all shares are bought
  t1PlotIsCompleted =[false,false,false,false,false,false,false,false,false]; 
  t2PlotIsCompleted =[false,false,false];
  t3PlotIsCompleted =[false,false];
  t1BuildingPlaced =[false,false,false,false,false,false,false,false,false]; 
  t2BuildingPlaced =[false,false,false];
  t3BuildingPlaced =[false,false];
  t1LandIsOpen =[true,true,true,true,true,true,true,true,true];
  t2LandIsOpen =[true,true,true];
  t3LandIsOpen =[true,true];
  
  //data of street availability
  streetsOpen = [
  true,true,true,true,true,//left street
  true,true,true,true,true,//right street
  false,true,true,false,true,true,//mid horiz street
  ];
  streetsFinished = [
  false,false,false,false,false,//left street
  false,false,false,false,false,//right street
  false,false,false,false,false,false,//mid horiz street
  ];
   carsAvailable = [true,true,true,true];
   
  p1CompleteSharesOwned = [0,0,0];
   lJobCooldown=-200;
   randomJobLocationsLeft = [-1,-1];
   jobProgressLeft = 0;
   progressMessageLeft = '';
        questionsAnsweredLeft = [
    false,false,false,false,
    false,false,false,false,
    false,false,false,false,
    false,false,false,false,
    ];
    educationOpenLeft=false;
   randomQuestionLeft=randomNumber(0,19);
   vocabQuestionsAnsweredLeft = [
    false,false,false,false,
    false,false,false,false,
    false,false,false,false,
    false,false,false,false,
    false,false,false,false
    ];
   quizHoverLeft = 1;
   quizColorsLeft = ['white','lightGray','lightGray','lightGray'];
   educationProgressLeft = -1;
   loopAtAnswerLeft = -200;
   totalQuestionsLeft = 0;
  t1Roofs.setColorEach(rgb(220,220,220));t2Roofs.setColorEach(rgb(220,220,220));t3Roofs.setColorEach(rgb(220,220,220));
t1Land.setColorEach(rgb(0,0,0,0.1));t2Land.setColorEach(rgb(0,0,0,0.1));t3Land.setColorEach(rgb(0,0,0,0.1));
      loopCount=130;
      blackout.visible=educationLevelLeft.visible=
    leftChar.visible=leftBackground.visible=shareHeader.visible=
    loansBackRight.visible=loansRight.visible=incomeRight.visible=incomeBackRight.visible=
    dividendsLeft.visible=dividendsBackLeft.visible=false;
    jobSprites.setVisibleEach(false);
    t1Land.setVisibleEach(false);t2Land.setVisibleEach(false);t3Land.setVisibleEach(false);
    t1LeftIndicators.setVisibleEach(false);t2LeftIndicators.setVisibleEach(false);t3LeftIndicators.setVisibleEach(false);
      whiteBackground.visible=leftChar1.visible=rightChar1.visible=startBtn.visible=true;
      
      //tier 1 buildings
      t1Buildings[0].setAnimation("t1BuildingRuin");t1Roofs[0].shapeColor=rgb(180,180,180);
      t1Buildings[1].setAnimation("t1FenceRuin");t1Roofs[1].visible=false;t1Land[1].visible=true;
      t1Buildings[2].visible=t1Roofs[2].visible=false; t1Land[2].visible=true;
      t1Buildings[3].setAnimation("t1BuildingRuin");t1Roofs[3].shapeColor=rgb(180,180,180);
      t1Buildings[4].visible=t1Roofs[4].visible=false; t1Land[4].visible=true;
      t1Buildings[5].setAnimation("t1FenceRuin");t1Roofs[5].visible=false;t1Land[5].visible=true;
      t1Buildings[6].setAnimation("t1BuildingRuin");t1Roofs[6].shapeColor=rgb(180,180,180);
      t1Buildings[7].visible=t1Roofs[7].visible=false; t1Land[7].visible=true;
      t1Buildings[8].setAnimation("t1FenceRuin");t1Roofs[8].visible=false;t1Land[8].visible=true;
      t1Buildings[9].setAnimation("t1BuildingSide");
      t1Buildings[10].setAnimation("t1BuildingSide");
      t1Buildings[11].setAnimation("t1BuildingSide");
      
      //tier 2 buildings
      t2Buildings[1].setAnimation("t2FenceRuin");t2Roofs[1].visible=false; t2Land[1].visible=true;
      t2Buildings[2].setAnimation("t2BuildingRuin");t2Roofs[2].shapeColor=rgb(180,180,180);
      t2Buildings[3].setAnimation("t2BuildingSide2");
      t2Buildings[4].setAnimation("t2BuildingSide3");
      
      //tier 3 buildings
      t3Buildings[0].setAnimation("t3FenceRuin");t3Land[0].visible=true;
      t3Buildings[1].setAnimation("t3FenceRuin");t3Land[1].visible=true;
      
      //reset green spaces
      green1.setAnimation("park2");
green2.setAnimation("park1");
green4.setAnimation("t3Park2");
green3.setAnimation("t3Alleyway2");
green5.setAnimation("t1Park2"); 
green6.setAnimation("t1Park2");

      rChars.setVisibleEach(true);
      leftChar.x=200; leftChar.y=100;
    leftChar.setAnimation('leftDown');
        jobLocations = [
    -1,-1,-1,-1,
    -1,-1, -1,-1,
    -1,-1,-1,-1,
    ];
    //reset street animations
    streets[0].setAnimation("bridgeVert2");
streets[1].setAnimation("streetVert2");
streets[2].setAnimation("intersectionLeft2");
streets[3].setAnimation("streetVert2");
streets[4].setAnimation("streetVert2");
streets[5].setAnimation("bridgeVert2");
streets[6].setAnimation("streetVert2");
streets[7].setAnimation("intersectionRight2");
streets[8].setAnimation("streetVert2");
streets[9].setAnimation("streetVert2");
for(var x=0;x<6;x++){
  streets[x+10].setAnimation("streetHoriz2");
}
    
    for(var tg=0;tg<jobSprites.length;tg++){
      jobSprites[tg].x=-50;jobSprites[tg].y=-50;
    }
    educationLevelLeft.setAnimation('noSign');educationLevelLeft.scale=0.05;
}
//movement for cars and ships (decorational)
function vehicleMovement(){
  //Car movement on highway{
  var carTimer = carCooldown-loopCount;
  if(carTimer==0){
    for(var loop = 0;loop<4;loop++){
      if(carsAvailable[loop]){
        carsAvailable[loop]=false;
        var currentCar=cars[loop];
        if(randomNumber(0,1)==0){
        currentCar.y=249;
        currentCar.x=-5;
        currentCar.setAnimation("carRight");
        currentCar.velocityX=4;
        }else{
          currentCar.y=231;
          currentCar.x=405;
          currentCar.setAnimation("carLeft");
          currentCar.velocityX=-4;
        }
        break;
      }
    }
    //increases frequency with more plots completed
    carCooldown=loopCount+randomNumber(90-plotsCompletedLeft*3,160-plotsCompletedLeft*10);
  }
  //control car movement, detect when they reach the end
  for(var carNum=0;carNum<4;carNum++){
    if((cars[carNum].x<-10)||(cars[carNum].x>410)){
      cars[carNum].setVelocity(0,0);
      cars[carNum].y=-50;
      cars[carNum].x=0;
      carsAvailable[carNum]=true;
    }
  }
  //}
  
  //boat movement on river
  if(ship.x>440){
    ship.x=-40;
    ship.y=randomNumber(10,25);
  }  
}
//finds an open street and places a voting sprite on it
function placeVotingSprite(number){
  //find open street to place vote sprite on
      for(var xj = 0;xj<3;xj++){
        randomJobLocationsLeft[number]=randomNumber(0,15);
        if(streetsOpen[randomJobLocationsLeft[number]]){
          break;
        }
      }
      //move vote sprite to chosen location
      jobLocations[number]=randomJobLocationsLeft[number];
      jobSprites[number].x=streets[randomJobLocationsLeft[number]].x;  jobSprites[number].y=streets[randomJobLocationsLeft[number]].y;
      streetsOpen[randomJobLocationsLeft[number]]=false;
      
      lJobCooldown=loopCount;
}
//collisions for advocacy sprites and calculations
function advocacyFunctions(number){
  if(!lTouchingJob){
      jobProgressLeft+=0.01;
      lTouchingJob=true;
      closeMenu();closeEducationLeft();
    }if(keyDown("E")){
    jobProgressLeft+=0.04;
    }
    //if the task is done
    if(jobProgressLeft>=1&&charBoxLeft.isTouching(jobSprites[number])){
      jobSprites[number].x=-50;jobSprites[number].y=-50;
      jobLocations[number]=-1;
      if(lJobCooldown+120<=loopCount){
        lJobCooldown=loopCount;
      }
      jobProgressLeft=0;
      streetsOpen[randomJobLocationsLeft[number]]=true;
      //adjust voteData according to position and education level
      if(voteData[0]=="support"){
        if(educationProgressLeft<1){
          voteData[2]+=randomNumber(1,8)/4;
        }else{
          voteData[2]+=randomNumber(8,16)/4;
        }
        //subtract from supporting votes
      }else if(voteData[0]=="oppose"){
        if(educationProgressLeft<1){
          voteData[2]-=randomNumber(1,8)/4;
        }else{
          voteData[2]-=randomNumber(8,16)/4;
        }
      }
    }
}
//rates the offer based on three max inputted values
function rateOffer(offerIndex, curIncome, maxPoor, maxAverage, maxGood){
        if(curIncome<maxPoor){
          offerRatings[offerIndex]="POOR";
          ratingColors[offerIndex]=rgb(255,220,225);
        }else if(curIncome<maxAverage){
          offerRatings[offerIndex]="AVERAGE";
          ratingColors[offerIndex]=rgb(255,255,210);
        }else if(curIncome<maxGood){
          offerRatings[offerIndex]="GOOD";
          ratingColors[offerIndex]=rgb(220,255,225);
        }else{
          offerRatings[offerIndex]="EXCELLENT";
          ratingColors[offerIndex]=rgb(225,220,255);
        }
}
//matches the randomly generated value to a position on the map and places a trash there
function placeTrash(rValue,trashNum){
  if(trashPositions[trashNum]==-1){
    switch(rValue){
      case 0 :
        if(openCULocations[rValue]){
          trash[trashNum].x=streets[1].x-15;trash[trashNum].y=streets[1].y;
          openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
          trash[trashNum].rotation=randomNumber(0,360);
          return true;
        }
          return false;
          
      case 1 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[2].x-15;trash[trashNum].y=streets[2].y;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 2 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[3].x-15;trash[trashNum].y=streets[3].y;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 3 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[4].x-15;trash[trashNum].y=streets[4].y;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 4 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[1].x+15;trash[trashNum].y=streets[1].y;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 5 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[3].x+15;trash[trashNum].y=streets[3].y;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 6 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[4].x+15;trash[trashNum].y=streets[4].y;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 7 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[6].x-15;trash[trashNum].y=streets[6].y;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 8 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[8].x-15;trash[trashNum].y=streets[8].y;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 9 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[9].x-15;trash[trashNum].y=streets[9].y;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }return false;
      case 10 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[6].x+15;trash[trashNum].y=streets[6].y;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }return false;
      case 11 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[7].x+15;trash[trashNum].y=streets[7].y;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 12 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[8].x+15;trash[trashNum].y=streets[8].y;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 13 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[9].x+15;trash[trashNum].y=streets[9].y;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 14 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[10].x;trash[trashNum].y=streets[10].y-15;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 15 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[11].x;trash[trashNum].y=streets[11].y-15;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 16 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[12].x;trash[trashNum].y=streets[12].y-15;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 17 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[13].x;trash[trashNum].y=streets[13].y-15;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 18 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[14].x;trash[trashNum].y=streets[14].y-15;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 19 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[15].x;trash[trashNum].y=streets[15].y-15;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 20 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[11].x;trash[trashNum].y=streets[11].y+10;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 21 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[12].x;trash[trashNum].y=streets[12].y+10;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 22 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[13].x;trash[trashNum].y=streets[13].y+10;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 23 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[15].x;trash[trashNum].y=streets[15].y+10;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 24 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[0].x-15;trash[trashNum].y=streets[0].y;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 25 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[0].x+15;trash[trashNum].y=streets[0].y;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 26 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[5].x-15;trash[trashNum].y=streets[5].y;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
      case 27 :
        if(openCULocations[rValue]){
        trash[trashNum].x=streets[5].x+15;trash[trashNum].y=streets[5].y;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
        case 28 :
        if(openCULocations[rValue]){
        trash[trashNum].x=green4.x+75;trash[trashNum].y=green4.y;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
        case 29 :
        if(openCULocations[rValue]){
        trash[trashNum].x=green4.x-75;trash[trashNum].y=green4.y;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
        case 30 :
        if(openCULocations[rValue]){
        trash[trashNum].x=green4.x;trash[trashNum].y=green4.y-40;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
        case 31 :
        if(openCULocations[rValue]){
        trash[trashNum].x=green4.x;trash[trashNum].y=green4.y;
        openCULocations[rValue]=false;trashPositions[trashNum]=rValue;
        trash[trashNum].rotation=randomNumber(0,360);
        return true;
        }
        return false;
    }
  }else{
    return false;
  }
  

}
//determines if the trash progress bar should be open or not
function checkTrashCollisions(){
  for(var fl = 0;fl<10;fl++){
    if(charBoxLeft.collide(trash[fl])&&cleanUpActive){
      trashCollisionNum=fl;
      return true;
    }
  }
}
//resets the clean up job back to the advocacy settings
function resetCleanUp(){
  progressMessageLeft="[E] Advocate";
  cleanUpActive = false;
  cleanUpSprites.setVisibleEach(false);
  jobProgressLeft=0;
  var trashIncome = trashPickedUp*500;
  if(cLoans>trashIncome){
    cLoans-=trashIncome;
  }else{
    cFunding+=trashIncome-cLoans;
    cLoans=0;
  }
  if(trashPickedUp>0)(cMoneyUpdateCount=loopCount);
  
  trashPickedUp=0;
}
//}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
