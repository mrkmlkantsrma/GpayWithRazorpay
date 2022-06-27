/*!
 * Made by Kamal Kant
 */

 // Function to lazy load a script
    // -----------------------------------------------
    var loadExternalScript = function(path) {
        var result = $.Deferred(),
            script = document.createElement("script");
    
        script.async = "async";
        script.type = "text/javascript";
        script.src = path;
        script.onload = script.onreadystatechange = function(_, isAbort) {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            if (isAbort)
              result.reject();
            else
              result.resolve();
          }
        };
    
        script.onerror = function() {
          result.reject();
        };
    
        $("head")[0].appendChild(script);
    
        return result.promise();
      };
    
      // Use loadScript to load the Razorpay checkout.js
    // -----------------------------------------------
    var callRazorPayScript = function(itemId, amount, qty, processorId) {
      var merchangeName = "Kamal Kant Sharma",
          img = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ8NDRAQDQ0NDQ8NDw0NDxANDQ8NFhEWGBURFRUYHSggGBolGxUVITEhJykrLi8uFx82ODMsOCgtMSsBCgoKDg0OGxAQGi0eICYyLTcwMC8tLS0uLSsvNS0rLTc1LS0tLi0rLS8tNy0tNy8tLS0tNy8tNy0tLS0tLTg1L//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEBAAMBAQEBAAAAAAAAAAAAAQUGBwQCAwj/xABBEAACAgIAAwUEBwcBBgcAAAAAAQIDBBEFEiEGEzFBUSJhcZEHFDJCgaGxFSNSYnLB0UM0gpKy8PEzU2ODk8LS/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EACsRAQABAwMDAgQHAAAAAAAAAAABAgMRBBIhMUFRcZEFEyLRFBVhgbHB4f/aAAwDAQACEQMRAD8A7WAAKCACggApAAKCAAUgAFIAKCACggAoIAKQACggAoIAKCABspAAKQACkAFIAAAAAAoEAKBCkKBACgQAAUgAAAAAAAAAAAAUEKBAAAAKBAUgAFAEBQBAUAQFAEB5srPqp6TmlL+CO5T+S6ow+X2ojD7Fbfvsmo/lHf6kxEyjLYQaPb24si//AA6WvRuSfz3/AGM12e7UU50nVrurknLkclKM0vFxl569NfMTTJEwzwKCEoCgCAoAgBQICgCAoAgAAAAAAAAKAIASclFOUmlFJttvSSXi2wKfMbE24p7cej110/R+/wBxg6OIWcQnKOM5VYUJOM8pdLL5LxhT/DH1n4+mvE9WZnQxo9zSoqSXh9ytPzl6t+OvF+LLTThnRcivmnp58+j3ZWXCpbm+r+zFdZy+C/v4GA4lxqWnuSqh6RepP4y/stfiYLi/HY1czcuex/alJ9fdv+yRr9GVPIl3s2+VP2U/N+uvJFopTNTZ6KcrL/2arlrf+tb+7rfvXnL8D1LsRKxbvypbflVWkl+LfX5GFq4hcvC21f8AuT/ye/H41kx8LZP+rU/12TMSrmGmfSR2cyuFKq+jKVmNdY6tWVQjbC3lcktrpJNRl6a157MH2J4rkR4pgqfLLmy6a+aC5ZKM5qMtrzXLJm/9r6rOL0V02WKrubHbGUYbUpcrj7S36N+HqYLsR2Sux+LY9uRKvuKee1WRmtSsUWoR09NPck/D7pOOOTvw7SADFqAAACkAAAAAABSFAgAAAAAAAKQACmkcVzp8Vy1w/Hk44sHu+2P31F9X/TvSXq+vgZntnxJ4+I1B6svfdRa8YprcpfLp8Wjx/R9gqvFlfr2r5tJ/+nB6S+fMbURtp3+zztRcm7ejTR061enj92T4nlwwMeFdSUHy8lUPKMUusn662vi2jn/G+OKqMva69XKTe3t+fvkz2duOJv65dHfSmMK1/wACl+s/yRzDjWc7LeTfsw6v3za/wREcZdv6Q9/1ueTak+ictJenvfqzZqNRSiuiS0jU+Bv97H4S18dGz1yLQrL31yPTXM8Fcj146cnpa3/NKMF820iR7a5HphIY/DXLxuxoe6V8G/y2ZGrgFsluFlE/6LHL+xGYMS9vZ7Llz903uLi3FPya69Pw2bEa7wnht1ORBzj7Ope1Fpr7L/E2Eyq68NKeiggKrKQAAAAAAAFIUCAAAAAABQICgDRvpBnu/Hr8o1Tnr3uSX/1RsXZNr6hRryU0/ipy2YD6R6XH6tlJbUJTpn/vacf+WX5H12N4xCCdUpfu7HzQk/CNnnF+m+n/AEzS5Viinx/bxaKot6+uau/+MR9J/BbYynnVRc6pwj33Km3XOKS53/K4pdfJrr4nIcnrNzT2pa38dH9UGA4j2K4XlSc7cOrnk9udXNRJv1bra2yIq4xL2Jp8OA4dji1JeKe0bNiZkZpdeV+j/sdNp+jvhEHtYu/6r8iS+XOZfE7O4NPWrFx4tefdRlL5vqTvwja5djRlPpCMpv0hFy/QyNPDMl+GPf8A/DZ/g6nFJLS6JeS6IDebHMpYV9a3Om2C9ZVzivno/PHy4OWoTi5J61Gack/wOomN41wDD4hDkzKK7vSco6th74zXtRfwY+YbGvYHG7qtJy7yP8Nj2/wl4o2rAzoZEOeHl0lF/ai/ece7Udn87gdqsxLrL8Kb9hW/vOR633U18Oqcdb6+Guuf7Ddpo32Reu7sTULqt7XK3rmi/Nb+X6piJjgiZh0sFIZrgAAAAAAAKAAIAAA2AAAAAAAeXiuBDLosx7PsWR1teMZeKkvenpnIc3Fv4fkSpnuM4+DX2LIeUl6r9DtB4OM8Hozq+7vjvXWE49LK36xf9vBm1q5FP01RmJcGu0Xz43U8VQ0HhXbO+hKMoqyC8m30Xu/7mwUdvKGvbpti/wCTkmvzaNF7S8NfDchU2S5oTh3ldvK0pR200/HTXn8V6nhhlw/iXzNo09qeaf5eL+M1didkz08xl1KPbTEflcvc4R//AEJdssf7tdz+KhFf8xzSvMg3pS5n6RTl+h7a5lK7MRHB+banvj2dDXHrJ/YqhFPwc7HL8kv7n3HiGRL71UfhXJ/rI1DhObytQk/Zb6e5mx02HDXTV5ehY1dV2MzLKQyr/WqXucZQ/PbPXi5XebjJOE4rbi+vT1T80Y2qZ++O95ENeVVjl8G4pfn+hlFVVMxy9C3XL47WYyu4fkxl92p2r3Sh7S/T8zkvDcfkzKbK+kpWRrkl96M2l+rT/A632puUMG/1nDukvVyen+W/kaV2R4Z32bCTXsUfvpPy5l9hf8XX8Gd1PRtV1dLZADNcAAAAAAAAKABAAABSAAAAAAAAAa/224AuIYjjFLv6W7KX5uWvah8JL80jj8MWKepb2npp9NPzTP6AOfdv+zbTln48ej65EI+T/wDNS9PX5+p1aauM7ankfE9LNUfNo6x19GnUpRWopL4HphM8EJnohM7JpfN1Q99czaeGZPPXFvx8H8UadCZn+B2ew/6/7I471rjLo0lyaa8NmrtSW29JdW35IynB6nyyuktO3XKn4qpfZ+e2/wATD8IxHky5pf7PXLr6WzX3V/KvP1fT1M3xPMdceStc10+kIrrr+Y4ot/U+l0sTMb56dmvdrcl32wxq/a5H1S681r6Jfgv1ZneA8LWJTydHZN81kl5y9F7l/n1Pz4PwlU/vbPaulvr48m/HT836syprM9odkR3kABVYAKBAAAAAAoAEBSAAUgAFAEBQBACgQNb/ABKAOb9r+xsqXLJwouVT3KyiK3Kv1lBecfd5fDw06uZ3g1btB2JoypO2l/VrpPcuWPNVN+rj00/evzOy1qe1fu8XWfDN077Xt9nN4TNy7L8EsyIRlLdeN4yn9mdr/hh6R9ZfL1Xv4L2EqpkrMmf1hp7Vajy1f73nL9PibgkktJLWta8tEXr8TxSz0fwqYnfe9vu/CK5IqumKSilFdNVwS/68C0Y0YNy+1OX2py+0/wDCP2QOXL3YjACghKAoAgKQACgCAoAhSFAgAAAAAAAAAAAFA+ZvSbS215LxZ4Lc21f6TXx5n+hkABiJcSt9Ir8H/k+f2nZ/L8jNEAw37Ts/l+R9R4lZ6Rf4P/JlygY2vOtf+lv4KSPfVJtJuLi/4W0z7IAAAAAAAAAAAAAACgACAoEKQACkKA0cp4VHO7SZGXcs6/Aw8a3uqasaU4t+OnLllHb0k23vrLS0dVOe29jOJYOVffwXLqppy5Oc6MiO1CTbfs+xJPTk9PSeuj2WhEtu7OYF+Jixqy8medbFybvnHllyeUfNvS8229t9TnXZ6rP7SyyMyfEL8HGrudVNGLKUNeypJNRkt6jKPV7bbfgdE7M4WXj4yrz8hZl/PKTtjDlSTe+Tf3tPfXS6dNdDT12J4nw++6XBMyqnHyJOboyI77t9dJbhJPW9J6T0knvQhEvR9HvFsuObm8IzrXlTwvbryJNubgpJNSk+r2pQa3trbW30MD2841xDG46/qVt0o4+PVkPFVk3jyhGDdnNVvTWt76b8/I3HsT2Slw6V+Tk3fWs7Le7bdNRS25OMd9XtvbfTwXRaE+zFr49Hi3PX3Cx+5dXtd7vu3HfhrW36k5jJicOdcb7ZZ2fl42TRLIw8D6xVj1wrulWrJ80HZz8jXO+q9yWvVnRPpSyraOEX2UWWUWK3HSspnKqxJ3wTSlFpra6H5drexzzI4FeF3GNVg5DudfK4Q5XKLagorW9p/MyfbjglnEuH24lMoV2WTqkpW83IlCyMnvSb8EMxwYnlym7jOVgUYebjcZs4hkXd27eHTtne4bhzOuac5efseCe30OudrONLh3D78t/bhDVUX53y6Qj8319yZ4uz3YzCw68eUsaiWZTVWp5Ci5N3KK5rI83g97e9Jnm7c9lr+LTxKlbCrCps7y+O5d9ZJ9Nx6NbUeZLb8Zv0EzEyRExDWPo/4tm4mfTicTuuuhxPDryceWRbZa4WNSlGPtfZbSkmvVRM99Lubdj8MhPHttx5vLri50WzpnyuFm1zRaeui+RjOJ/RXGCqt4ZkWVZVV0LIzy589aUdta5Y7TUlF+nRmw9vOzt/FuHwxoTqquV1ds3Nz7rahJSUWlvxl06DMZyYnGHOu0nbjJv4RXV31+JxPFylXkOqyeNZbV3FurPZafjy7Xrp+aOndsOF5GZgSjh33Y+VXFW1SousodklHrXJxa2pJvx8Hpmu9t/o5/aKqtxp10ZcaYUXSnzd1dGMNKXRN8y8N66rx8EdAhHSS9El+QmY7ERPdyDh3HuI8etwuH12X4f1aLnxDJpsnRbPlfLtuLTTa6cr+/JvWonX4Q5YqK21FJJyblLSXm31b97NU7H9lruH5nEsm2yucM+/va4183NCPe2z1LaXXVi8PRm2EVT4TEKCAqlQQoAEAApCgQAACkKBACgCFAAAAa1dwvOX7RdWRY3ODjw+Nlns18y55tvTfNztxjJp8sVHS8d/ni4fEK6XJd4+XPruqxbcpW3/AFNVxjOmVz6S3Pnmk2+mlv02kE5RhpuRwvirXD+W5qVNC+t8t8nz3O+lvXVKxqtXLclr3ba1neO4Fl/1fup218mRF291fOjeO986fK1zPpHXn4mVAyYa3TRxP9oX2ylWsO2FlNNfeOTp5Yx7q5w1rbmrN6bepxWly9fFhYXFIYlkZOTvWThWRUsqU7LIQsreTHvJScVGSjLSSj9prlRuIGTDXOKY2fcst0ylQ7uH48KIq6O6cxWWuxp+CfLKtc3nox+dw3i8sWMFbvIXErLJzqtlVGeF3U4w0lOLjuXJLk5lp76tLruZBkw+aU+WO975Vvb29669fM+ighKAoAgKQACkAFAAhQAIAAAAAAFAgKAICgCAoAgKAICgCApAAKAICgCApAAKQAAABSFAgAAFIABSACghQAIAKCFAAgAoIAKCACggAoIAKQAAUgAAAAUhQIAABQAIUACAoAgKAICgCAoAhQABCgCAoAgKAIgUAQFAEBQAAAH/2Q==",
          name = "Kamal Kant",
          description = "Payment for Check",
          amount = amount,
          qty = qty;
          
      loadExternalScript('https://checkout.razorpay.com/v1/checkout.js').then(function() { 
        var options = {
          key: 'rzp_test_nJScr06pajaP7k',
          protocol: 'https',
          hostname: 'api.razorpay.com',
          amount: amount,
          name: merchangeName,
          description: description,
          image: img,
          prefill: {
            name: name,
          },
          theme: {
            color: '#3d0951'
          },
          handler: function (transaction, response){
              var trans_id = transaction.razorpay_payment_id;
            //   var trans_id = 'pay_JmVG2BN2GeQCaZ';
              var url = "https://api.razorpay.com/v1/payments/{"+trans_id+"}";
             
              var settings = {
                "url": url,
                "method": "GET",
                "timeout": 0,
                "headers": {
                  "key_id": "rzp_test_nJScr06pajaP7k",
                  "key_secret": "LLGZ6LbqBLejIoOuWGeKLhXu",
                  "Authorization": "Basic Og=="
                },
              };
              
              $.ajax(settings).done(function (response) {
              });

              var icon = 'success';
              var message = 'Payment Successfull';
              alertMessage(icon, message);
  
              if(trans_id){
                document.getElementById("trans_id").innerHTML = " "+trans_id+" ";
                document.getElementById("amountPaying").innerHTML = " "+amount/100+" ₹";
                document.getElementById("holder").innerHTML = merchangeName;
                document.getElementById("inputd").style.display = "none";
                document.getElementById("outputd").style.display = "block";
              }else{
                  var icon = 'error';
                  var message = 'Payment Failed!';
                  alertMessage(icon, message);
              }
          }
        };
      function alertMessage(icon, message){
          Swal.fire({
              icon: icon,
              title: message,
              showConfirmButton: false,
              timer:1500
          })
      }
    
      window.rzpay = new Razorpay(options);
        // console.log('Item Id: ', amount);
        // console.log('Amount: ', amount);
        // console.log('Quantity: ', qty);
        // console.log('Processor Id: ', processorId);
        rzpay.open();
      });
    }
    
    // Trigger call to action buttons depending on the bundle packs
    // -----------------------------------------------
    var $payBundle = $('.js-pay-bundle');
    
    $payBundle.on('click', function() {
        var itemId = $(this).data('itemid'),
                amount = $(this).data('amount'),
                processorid = $(this).data('processorid'),
                qty = $(this).data('qty');
    
        callRazorPayScript(itemId, amount, processorid, qty);
    });

/*!
 * Made by Kamal Kant
 */