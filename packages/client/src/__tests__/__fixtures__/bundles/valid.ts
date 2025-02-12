export const v1 = {
  messageSignature: {
    // Valid messageSignature bundle signed with a Fulcio signing certificate
    withSigningCert: {
      mediaType: 'application/vnd.dev.sigstore.bundle+json;version=0.1',
      verificationMaterial: {
        x509CertificateChain: {
          certificates: [
            {
              rawBytes:
                'MIICoDCCAiagAwIBAgIUevae+nLQ8mg6OyOB43MKJ10F2CEwCgYIKoZIzj0EAwMwNzEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MR4wHAYDVQQDExVzaWdzdG9yZS1pbnRlcm1lZGlhdGUwHhcNMjIxMTA5MDEzMzA5WhcNMjIxMTA5MDE0MzA5WjAAMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE9DbYBIMQLtWb6J5gtL69jgRwwEfdtQtKvvG4+o3ZzlOroJplpXaVgF6wBDob++rNG9/AzSaBmApkEwI52XBjWqOCAUUwggFBMA4GA1UdDwEB/wQEAwIHgDATBgNVHSUEDDAKBggrBgEFBQcDAzAdBgNVHQ4EFgQUVIIFc08z6uV9Y96S+v5oDbbmHEYwHwYDVR0jBBgwFoAU39Ppz1YkEZb5qNjpKFWixi4YZD8wHwYDVR0RAQH/BBUwE4ERYnJpYW5AZGVoYW1lci5jb20wLAYKKwYBBAGDvzABAQQeaHR0cHM6Ly9naXRodWIuY29tL2xvZ2luL29hdXRoMIGKBgorBgEEAdZ5AgQCBHwEegB4AHYA3T0wasbHETJjGR4cmWc3AqJKXrjePK3/h4pygC8p7o4AAAGEWgUGQwAABAMARzBFAiEAlKycMBC2q+QM+mct60RNENxpURHes6vgOBWdx71XcXgCIAtnMzw/cBw5h0hrYJ8b1PJjoxn3k1N2TdgofqvMhbSTMAoGCCqGSM49BAMDA2gAMGUCMQC2KLFYSiD/+S1WEsyf9czf52w+E577Hi77r8pGUM1rQ/Bzg1aGvQs0/kAg3S/JSDgCMEdN5dIS0tRm1SOMbOFcW+1yzR+OiCVJ7DVFwUdI3D/7ERxtN9e/LJ6uaRnR/Sanrw==',
            },
            {
              rawBytes:
                'MIICGjCCAaGgAwIBAgIUALnViVfnU0brJasmRkHrn/UnfaQwCgYIKoZIzj0EAwMwKjEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MREwDwYDVQQDEwhzaWdzdG9yZTAeFw0yMjA0MTMyMDA2MTVaFw0zMTEwMDUxMzU2NThaMDcxFTATBgNVBAoTDHNpZ3N0b3JlLmRldjEeMBwGA1UEAxMVc2lnc3RvcmUtaW50ZXJtZWRpYXRlMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE8RVS/ysH+NOvuDZyPIZtilgUF9NlarYpAd9HP1vBBH1U5CV77LSS7s0ZiH4nE7Hv7ptS6LvvR/STk798LVgMzLlJ4HeIfF3tHSaexLcYpSASr1kS0N/RgBJz/9jWCiXno3sweTAOBgNVHQ8BAf8EBAMCAQYwEwYDVR0lBAwwCgYIKwYBBQUHAwMwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQU39Ppz1YkEZb5qNjpKFWixi4YZD8wHwYDVR0jBBgwFoAUWMAeX5FFpWapesyQoZMi0CrFxfowCgYIKoZIzj0EAwMDZwAwZAIwPCsQK4DYiZYDPIaDi5HFKnfxXx6ASSVmERfsynYBiX2X6SJRnZU84/9DZdnFvvxmAjBOt6QpBlc4J/0DxvkTCqpclvziL6BCCPnjdlIB3Pu3BxsPmygUY7Ii2zbdCdliiow=',
            },
            {
              rawBytes:
                'MIIB9zCCAXygAwIBAgIUALZNAPFdxHPwjeDloDwyYChAO/4wCgYIKoZIzj0EAwMwKjEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MREwDwYDVQQDEwhzaWdzdG9yZTAeFw0yMTEwMDcxMzU2NTlaFw0zMTEwMDUxMzU2NThaMCoxFTATBgNVBAoTDHNpZ3N0b3JlLmRldjERMA8GA1UEAxMIc2lnc3RvcmUwdjAQBgcqhkjOPQIBBgUrgQQAIgNiAAT7XeFT4rb3PQGwS4IajtLk3/OlnpgangaBclYpsYBr5i+4ynB07ceb3LP0OIOZdxexX69c5iVuyJRQ+Hz05yi+UF3uBWAlHpiS5sh0+H2GHE7SXrk1EC5m1Tr19L9gg92jYzBhMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBRYwB5fkUWlZql6zJChkyLQKsXF+jAfBgNVHSMEGDAWgBRYwB5fkUWlZql6zJChkyLQKsXF+jAKBggqhkjOPQQDAwNpADBmAjEAj1nHeXZp+13NWBNa+EDsDP8G1WWg1tCMWP/WHPqpaVo0jhsweNFZgSs0eE7wYI4qAjEA2WB9ot98sIkoF3vZYdd3/VtWB5b9TNMea7Ix/stJ5TfcLLeABLE4BNJOsQ4vnBHJ',
            },
          ],
        },
        tlogEntries: [
          {
            logIndex: '6757503',
            logId: {
              keyId: 'wNI9atQGlz+VWfO6LRygH4QUfY/8W4RFwiT5i5WRgB0=',
            },
            kindVersion: { kind: 'hashedrekord', version: '0.0.1' },
            integratedTime: '1667957590',
            inclusionPromise: {
              signedEntryTimestamp:
                'MEUCIFUNcHgHB318gCNJR0/CH4E0daODbnfePyzKCDqrt3twAiEA9N+ZObaLwVJwvOtPgkfoBa5NzjTH0eC06YBlOyZlMiY=',
            },
            canonicalizedBody:
              'eyJhcGlWZXJzaW9uIjoiMC4wLjEiLCJraW5kIjoiaGFzaGVkcmVrb3JkIiwic3BlYyI6eyJkYXRhIjp7Imhhc2giOnsiYWxnb3JpdGhtIjoic2hhMjU2IiwidmFsdWUiOiI2OGU2NTZiMjUxZTY3ZTgzNThiZWY4NDgzYWIwZDUxYzY2MTlmM2U3YTFhOWYwZTc1ODM4ZDQxZmYzNjhmNzI4In19LCJzaWduYXR1cmUiOnsiY29udGVudCI6Ik1FUUNJSHM1YVV1bHExSHBSK2Z3bVNLcExrL29Bd3E1TzlDRE5GSGhaQUtmRzVHbUFpQndjVm5mMm9ienNDR1ZsZjBBSXZidkhyMjFOWHQ3dHBMQmw0K0JyaDZPS0E9PSIsInB1YmxpY0tleSI6eyJjb250ZW50IjoiTFMwdExTMUNSVWRKVGlCRFJWSlVTVVpKUTBGVVJTMHRMUzB0Q2sxSlNVTnZSRU5EUVdsaFowRjNTVUpCWjBsVlpYWmhaU3R1VEZFNGJXYzJUM2xQUWpRelRVdEtNVEJHTWtORmQwTm5XVWxMYjFwSmVtb3dSVUYzVFhjS1RucEZWazFDVFVkQk1WVkZRMmhOVFdNeWJHNWpNMUoyWTIxVmRWcEhWakpOVWpSM1NFRlpSRlpSVVVSRmVGWjZZVmRrZW1SSE9YbGFVekZ3WW01U2JBcGpiVEZzV2tkc2FHUkhWWGRJYUdOT1RXcEplRTFVUVRWTlJFVjZUWHBCTlZkb1kwNU5ha2w0VFZSQk5VMUVSVEJOZWtFMVYycEJRVTFHYTNkRmQxbElDa3R2V2tsNmFqQkRRVkZaU1V0dldrbDZhakJFUVZGalJGRm5RVVU1UkdKWlFrbE5VVXgwVjJJMlNqVm5kRXcyT1dwblVuZDNSV1prZEZGMFMzWjJSelFLSzI4elducHNUM0p2U25Cc2NGaGhWbWRHTm5kQ1JHOWlLeXR5VGtjNUwwRjZVMkZDYlVGd2EwVjNTVFV5V0VKcVYzRlBRMEZWVlhkblowWkNUVUUwUndwQk1WVmtSSGRGUWk5M1VVVkJkMGxJWjBSQlZFSm5UbFpJVTFWRlJFUkJTMEpuWjNKQ1owVkdRbEZqUkVGNlFXUkNaMDVXU0ZFMFJVWm5VVlZXU1VsR0NtTXdPSG8yZFZZNVdUazJVeXQyTlc5RVltSnRTRVZaZDBoM1dVUldVakJxUWtKbmQwWnZRVlV6T1ZCd2VqRlphMFZhWWpWeFRtcHdTMFpYYVhocE5Ga0tXa1E0ZDBoM1dVUldVakJTUVZGSUwwSkNWWGRGTkVWU1dXNUtjRmxYTlVGYVIxWnZXVmN4YkdOcE5XcGlNakIzVEVGWlMwdDNXVUpDUVVkRWRucEJRZ3BCVVZGbFlVaFNNR05JVFRaTWVUbHVZVmhTYjJSWFNYVlpNamwwVERKNGRsb3liSFZNTWpsb1pGaFNiMDFKUjB0Q1oyOXlRbWRGUlVGa1dqVkJaMUZEQ2tKSWQwVmxaMEkwUVVoWlFUTlVNSGRoYzJKSVJWUktha2RTTkdOdFYyTXpRWEZLUzFoeWFtVlFTek12YURSd2VXZERPSEEzYnpSQlFVRkhSVmRuVlVjS1VYZEJRVUpCVFVGU2VrSkdRV2xGUVd4TGVXTk5Ra015Y1N0UlRTdHRZM1EyTUZKT1JVNTRjRlZTU0dWek5uWm5UMEpYWkhnM01WaGpXR2REU1VGMGJncE5lbmN2WTBKM05XZ3dhSEpaU2poaU1WQkthbTk0YmpOck1VNHlWR1JuYjJaeGRrMW9ZbE5VVFVGdlIwTkRjVWRUVFRRNVFrRk5SRUV5WjBGTlIxVkRDazFSUXpKTFRFWlpVMmxFTHl0VE1WZEZjM2xtT1dONlpqVXlkeXRGTlRjM1NHazNOM0k0Y0VkVlRURnlVUzlDZW1jeFlVZDJVWE13TDJ0Qlp6TlRMMG9LVTBSblEwMUZaRTQxWkVsVE1IUlNiVEZUVDAxaVQwWmpWeXN4ZVhwU0swOXBRMVpLTjBSV1JuZFZaRWt6UkM4M1JWSjRkRTQ1WlM5TVNqWjFZVkp1VWdvdlUyRnVjbmM5UFFvdExTMHRMVVZPUkNCRFJWSlVTVVpKUTBGVVJTMHRMUzB0Q2c9PSJ9fX19',
          },
        ],
        timestampVerificationData: { rfc3161Timestamps: [] },
      },
      messageSignature: {
        messageDigest: {
          algorithm: 'SHA2_256',
          digest: 'aOZWslHmfoNYvvhIOrDVHGYZ8+ehqfDnWDjUH/No9yg=',
        },
        signature:
          'MEQCIHs5aUulq1HpR+fwmSKpLk/oAwq5O9CDNFHhZAKfG5GmAiBwcVnf2obzsCGVlf0AIvbvHr21NXt7tpLBl4+Brh6OKA==',
      },
    },
  },

  dsse: {
    // Valid DSSE bundle signed with a Fulcio signing certificate
    withSigningCert: {
      mediaType: 'application/vnd.dev.sigstore.bundle+json;version=0.1',
      verificationMaterial: {
        x509CertificateChain: {
          certificates: [
            {
              rawBytes:
                'MIICnzCCAiWgAwIBAgIUVHwehOtGn4KSD1H8RI581MfbyewwCgYIKoZIzj0EAwMwNzEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MR4wHAYDVQQDExVzaWdzdG9yZS1pbnRlcm1lZGlhdGUwHhcNMjIxMTA4MjI1ODA2WhcNMjIxMTA4MjMwODA2WjAAMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEGg6Hjxt2UNiJ1kwwq5XQIIwMZnJfVQ3bF01uZKteMdcV/3qhCmWOecoxRqwrbYTshGg9NyXcBbve6zKwZVTLeqOCAUQwggFAMA4GA1UdDwEB/wQEAwIHgDATBgNVHSUEDDAKBggrBgEFBQcDAzAdBgNVHQ4EFgQU7WpR60sCpgfu04wcsjvCFxt0fMkwHwYDVR0jBBgwFoAU39Ppz1YkEZb5qNjpKFWixi4YZD8wHwYDVR0RAQH/BBUwE4ERYnJpYW5AZGVoYW1lci5jb20wLAYKKwYBBAGDvzABAQQeaHR0cHM6Ly9naXRodWIuY29tL2xvZ2luL29hdXRoMIGJBgorBgEEAdZ5AgQCBHsEeQB3AHUA3T0wasbHETJjGR4cmWc3AqJKXrjePK3/h4pygC8p7o4AAAGEWXcR8AAABAMARjBEAiBRTrGE5Y1EnYniaJB+nsv89VaYx3QZjocEin3r91wfkAIgMss+fssu5SLQkn7WDTKXgow7SxbHYSZj3ykxArVnuzEwCgYIKoZIzj0EAwMDaAAwZQIxAPjSGddLIvyUMGIkZ+u6JhE9p1Njt3dEtwYkMxfnEV2k7MH1BVmxg9PsJjqycfi+eAIwDaKn2CdOxKsxcgYNi4HviEnZqxmeDyo2YFItzpHfIMQmcRSl91UeOSC8+PuGgwMK',
            },
            {
              rawBytes:
                'MIICGjCCAaGgAwIBAgIUALnViVfnU0brJasmRkHrn/UnfaQwCgYIKoZIzj0EAwMwKjEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MREwDwYDVQQDEwhzaWdzdG9yZTAeFw0yMjA0MTMyMDA2MTVaFw0zMTEwMDUxMzU2NThaMDcxFTATBgNVBAoTDHNpZ3N0b3JlLmRldjEeMBwGA1UEAxMVc2lnc3RvcmUtaW50ZXJtZWRpYXRlMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE8RVS/ysH+NOvuDZyPIZtilgUF9NlarYpAd9HP1vBBH1U5CV77LSS7s0ZiH4nE7Hv7ptS6LvvR/STk798LVgMzLlJ4HeIfF3tHSaexLcYpSASr1kS0N/RgBJz/9jWCiXno3sweTAOBgNVHQ8BAf8EBAMCAQYwEwYDVR0lBAwwCgYIKwYBBQUHAwMwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQU39Ppz1YkEZb5qNjpKFWixi4YZD8wHwYDVR0jBBgwFoAUWMAeX5FFpWapesyQoZMi0CrFxfowCgYIKoZIzj0EAwMDZwAwZAIwPCsQK4DYiZYDPIaDi5HFKnfxXx6ASSVmERfsynYBiX2X6SJRnZU84/9DZdnFvvxmAjBOt6QpBlc4J/0DxvkTCqpclvziL6BCCPnjdlIB3Pu3BxsPmygUY7Ii2zbdCdliiow=',
            },
            {
              rawBytes:
                'MIIB9zCCAXygAwIBAgIUALZNAPFdxHPwjeDloDwyYChAO/4wCgYIKoZIzj0EAwMwKjEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MREwDwYDVQQDEwhzaWdzdG9yZTAeFw0yMTEwMDcxMzU2NTlaFw0zMTEwMDUxMzU2NThaMCoxFTATBgNVBAoTDHNpZ3N0b3JlLmRldjERMA8GA1UEAxMIc2lnc3RvcmUwdjAQBgcqhkjOPQIBBgUrgQQAIgNiAAT7XeFT4rb3PQGwS4IajtLk3/OlnpgangaBclYpsYBr5i+4ynB07ceb3LP0OIOZdxexX69c5iVuyJRQ+Hz05yi+UF3uBWAlHpiS5sh0+H2GHE7SXrk1EC5m1Tr19L9gg92jYzBhMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBRYwB5fkUWlZql6zJChkyLQKsXF+jAfBgNVHSMEGDAWgBRYwB5fkUWlZql6zJChkyLQKsXF+jAKBggqhkjOPQQDAwNpADBmAjEAj1nHeXZp+13NWBNa+EDsDP8G1WWg1tCMWP/WHPqpaVo0jhsweNFZgSs0eE7wYI4qAjEA2WB9ot98sIkoF3vZYdd3/VtWB5b9TNMea7Ix/stJ5TfcLLeABLE4BNJOsQ4vnBHJ',
            },
          ],
        },
        tlogEntries: [
          {
            logIndex: '6751924',
            logId: { keyId: 'wNI9atQGlz+VWfO6LRygH4QUfY/8W4RFwiT5i5WRgB0=' },
            kindVersion: { kind: 'intoto', version: '0.0.2' },
            integratedTime: '1667948287',
            inclusionPromise: {
              signedEntryTimestamp:
                'MEQCIEzguFRaGzOpMw9JJGUfqSJQ11qlzpcyVCkZfZYPwpLCAiBzdU4LnjtVKYCfyoTImFh3OLFWeOKygtS47Z8fp1GYHg==',
            },
            canonicalizedBody:
              'eyJhcGlWZXJzaW9uIjoiMC4wLjIiLCJraW5kIjoiaW50b3RvIiwic3BlYyI6eyJjb250ZW50Ijp7ImVudmVsb3BlIjp7InBheWxvYWRUeXBlIjoidGV4dC9wbGFpbiIsInNpZ25hdHVyZXMiOlt7InB1YmxpY0tleSI6IkxTMHRMUzFDUlVkSlRpQkRSVkpVU1VaSlEwRlVSUzB0TFMwdENrMUpTVU51ZWtORFFXbFhaMEYzU1VKQlowbFZWa2gzWldoUGRFZHVORXRUUkRGSU9GSkpOVGd4VFdaaWVXVjNkME5uV1VsTGIxcEplbW93UlVGM1RYY0tUbnBGVmsxQ1RVZEJNVlZGUTJoTlRXTXliRzVqTTFKMlkyMVZkVnBIVmpKTlVqUjNTRUZaUkZaUlVVUkZlRlo2WVZka2VtUkhPWGxhVXpGd1ltNVNiQXBqYlRGc1drZHNhR1JIVlhkSWFHTk9UV3BKZUUxVVFUUk5ha2t4VDBSQk1sZG9ZMDVOYWtsNFRWUkJORTFxVFhkUFJFRXlWMnBCUVUxR2EzZEZkMWxJQ2t0dldrbDZhakJEUVZGWlNVdHZXa2w2YWpCRVFWRmpSRkZuUVVWSFp6WklhbmgwTWxWT2FVb3hhM2QzY1RWWVVVbEpkMDFhYmtwbVZsRXpZa1l3TVhVS1drdDBaVTFrWTFZdk0zRm9RMjFYVDJWamIzaFNjWGR5WWxsVWMyaEhaemxPZVZoalFtSjJaVFo2UzNkYVZsUk1aWEZQUTBGVlVYZG5aMFpCVFVFMFJ3cEJNVlZrUkhkRlFpOTNVVVZCZDBsSVowUkJWRUpuVGxaSVUxVkZSRVJCUzBKblozSkNaMFZHUWxGalJFRjZRV1JDWjA1V1NGRTBSVVpuVVZVM1YzQlNDall3YzBOd1oyWjFNRFIzWTNOcWRrTkdlSFF3WmsxcmQwaDNXVVJXVWpCcVFrSm5kMFp2UVZVek9WQndlakZaYTBWYVlqVnhUbXB3UzBaWGFYaHBORmtLV2tRNGQwaDNXVVJXVWpCU1FWRklMMEpDVlhkRk5FVlNXVzVLY0ZsWE5VRmFSMVp2V1ZjeGJHTnBOV3BpTWpCM1RFRlpTMHQzV1VKQ1FVZEVkbnBCUWdwQlVWRmxZVWhTTUdOSVRUWk1lVGx1WVZoU2IyUlhTWFZaTWpsMFRESjRkbG95YkhWTU1qbG9aRmhTYjAxSlIwcENaMjl5UW1kRlJVRmtXalZCWjFGRENrSkljMFZsVVVJelFVaFZRVE5VTUhkaGMySklSVlJLYWtkU05HTnRWMk16UVhGS1MxaHlhbVZRU3pNdmFEUndlV2RET0hBM2J6UkJRVUZIUlZkWVkxSUtPRUZCUVVKQlRVRlNha0pGUVdsQ1VsUnlSMFUxV1RGRmJsbHVhV0ZLUWl0dWMzWTRPVlpoV1hnelVWcHFiMk5GYVc0emNqa3hkMlpyUVVsblRYTnpLd3BtYzNOMU5WTk1VV3R1TjFkRVZFdFlaMjkzTjFONFlraFpVMXBxTTNscmVFRnlWbTUxZWtWM1EyZFpTVXR2V2tsNmFqQkZRWGROUkdGQlFYZGFVVWw0Q2tGUWFsTkhaR1JNU1haNVZVMUhTV3RhSzNVMlNtaEZPWEF4VG1wME0yUkZkSGRaYTAxNFptNUZWakpyTjAxSU1VSldiWGhuT1ZCelNtcHhlV05tYVNzS1pVRkpkMFJoUzI0eVEyUlBlRXR6ZUdObldVNXBORWgyYVVWdVduRjRiV1ZFZVc4eVdVWkpkSHB3U0daSlRWRnRZMUpUYkRreFZXVlBVME00SzFCMVJ3cG5kMDFMQ2kwdExTMHRSVTVFSUVORlVsUkpSa2xEUVZSRkxTMHRMUzBLIiwic2lnIjoiVFVWVlEwbERWV2hCVm1WM1puZExiR3MxWmxaNmNGSkVWVkJvUlhjNVR6aEpNbkI0UXpWdVZHNVFabGxFUW5OUFFXbEZRVEJhUm5Gek9UbFJaMUk1YlVGMFJrMVhkRmR5VDJwdFZVTTBOM3BuWVc5dmJFdEpiMHhJTDA5M1pFMDkifV19LCJoYXNoIjp7ImFsZ29yaXRobSI6InNoYTI1NiIsInZhbHVlIjoiZGNiNDkyNTljODY2MDdjMzQ2MzVkYWJiNDQzMWYwNjVlOWE3YTczNDcwNGNiNzNmMGFhMGY2YWFhMzg5NmEwNCJ9LCJwYXlsb2FkSGFzaCI6eyJhbGdvcml0aG0iOiJzaGEyNTYiLCJ2YWx1ZSI6IjY4ZTY1NmIyNTFlNjdlODM1OGJlZjg0ODNhYjBkNTFjNjYxOWYzZTdhMWE5ZjBlNzU4MzhkNDFmZjM2OGY3MjgifX19fQ==',
          },
        ],
        timestampVerificationData: { rfc3161Timestamps: [] },
      },
      dsseEnvelope: {
        payload: 'aGVsbG8sIHdvcmxkIQ==',
        payloadType: 'text/plain',
        signatures: [
          {
            sig: 'MEUCICUhAVewfwKlk5fVzpRDUPhEw9O8I2pxC5nTnPfYDBsOAiEA0ZFqs99QgR9mAtFMWtWrOjmUC47zgaoolKIoLH/OwdM=',
            keyid: '',
          },
        ],
      },
    },

    // Valid DSSE bundle signed with a public key
    withPublicKey: {
      mediaType: 'application/vnd.dev.sigstore.bundle+json;version=0.1',
      verificationMaterial: {
        publicKey: { hint: 'key-1' },
        tlogEntries: [
          {
            logIndex: '6751924',
            logId: { keyId: 'wNI9atQGlz+VWfO6LRygH4QUfY/8W4RFwiT5i5WRgB0=' },
            kindVersion: { kind: 'intoto', version: '0.0.2' },
            integratedTime: '1667948287',
            inclusionPromise: {
              signedEntryTimestamp:
                'MEQCIEzguFRaGzOpMw9JJGUfqSJQ11qlzpcyVCkZfZYPwpLCAiBzdU4LnjtVKYCfyoTImFh3OLFWeOKygtS47Z8fp1GYHg==',
            },
            canonicalizedBody:
              'eyJhcGlWZXJzaW9uIjoiMC4wLjIiLCJraW5kIjoiaW50b3RvIiwic3BlYyI6eyJjb250ZW50Ijp7ImVudmVsb3BlIjp7InBheWxvYWRUeXBlIjoidGV4dC9wbGFpbiIsInNpZ25hdHVyZXMiOlt7InB1YmxpY0tleSI6IkxTMHRMUzFDUlVkSlRpQkRSVkpVU1VaSlEwRlVSUzB0TFMwdENrMUpTVU51ZWtORFFXbFhaMEYzU1VKQlowbFZWa2gzWldoUGRFZHVORXRUUkRGSU9GSkpOVGd4VFdaaWVXVjNkME5uV1VsTGIxcEplbW93UlVGM1RYY0tUbnBGVmsxQ1RVZEJNVlZGUTJoTlRXTXliRzVqTTFKMlkyMVZkVnBIVmpKTlVqUjNTRUZaUkZaUlVVUkZlRlo2WVZka2VtUkhPWGxhVXpGd1ltNVNiQXBqYlRGc1drZHNhR1JIVlhkSWFHTk9UV3BKZUUxVVFUUk5ha2t4VDBSQk1sZG9ZMDVOYWtsNFRWUkJORTFxVFhkUFJFRXlWMnBCUVUxR2EzZEZkMWxJQ2t0dldrbDZhakJEUVZGWlNVdHZXa2w2YWpCRVFWRmpSRkZuUVVWSFp6WklhbmgwTWxWT2FVb3hhM2QzY1RWWVVVbEpkMDFhYmtwbVZsRXpZa1l3TVhVS1drdDBaVTFrWTFZdk0zRm9RMjFYVDJWamIzaFNjWGR5WWxsVWMyaEhaemxPZVZoalFtSjJaVFo2UzNkYVZsUk1aWEZQUTBGVlVYZG5aMFpCVFVFMFJ3cEJNVlZrUkhkRlFpOTNVVVZCZDBsSVowUkJWRUpuVGxaSVUxVkZSRVJCUzBKblozSkNaMFZHUWxGalJFRjZRV1JDWjA1V1NGRTBSVVpuVVZVM1YzQlNDall3YzBOd1oyWjFNRFIzWTNOcWRrTkdlSFF3WmsxcmQwaDNXVVJXVWpCcVFrSm5kMFp2UVZVek9WQndlakZaYTBWYVlqVnhUbXB3UzBaWGFYaHBORmtLV2tRNGQwaDNXVVJXVWpCU1FWRklMMEpDVlhkRk5FVlNXVzVLY0ZsWE5VRmFSMVp2V1ZjeGJHTnBOV3BpTWpCM1RFRlpTMHQzV1VKQ1FVZEVkbnBCUWdwQlVWRmxZVWhTTUdOSVRUWk1lVGx1WVZoU2IyUlhTWFZaTWpsMFRESjRkbG95YkhWTU1qbG9aRmhTYjAxSlIwcENaMjl5UW1kRlJVRmtXalZCWjFGRENrSkljMFZsVVVJelFVaFZRVE5VTUhkaGMySklSVlJLYWtkU05HTnRWMk16UVhGS1MxaHlhbVZRU3pNdmFEUndlV2RET0hBM2J6UkJRVUZIUlZkWVkxSUtPRUZCUVVKQlRVRlNha0pGUVdsQ1VsUnlSMFUxV1RGRmJsbHVhV0ZLUWl0dWMzWTRPVlpoV1hnelVWcHFiMk5GYVc0emNqa3hkMlpyUVVsblRYTnpLd3BtYzNOMU5WTk1VV3R1TjFkRVZFdFlaMjkzTjFONFlraFpVMXBxTTNscmVFRnlWbTUxZWtWM1EyZFpTVXR2V2tsNmFqQkZRWGROUkdGQlFYZGFVVWw0Q2tGUWFsTkhaR1JNU1haNVZVMUhTV3RhSzNVMlNtaEZPWEF4VG1wME0yUkZkSGRaYTAxNFptNUZWakpyTjAxSU1VSldiWGhuT1ZCelNtcHhlV05tYVNzS1pVRkpkMFJoUzI0eVEyUlBlRXR6ZUdObldVNXBORWgyYVVWdVduRjRiV1ZFZVc4eVdVWkpkSHB3U0daSlRWRnRZMUpUYkRreFZXVlBVME00SzFCMVJ3cG5kMDFMQ2kwdExTMHRSVTVFSUVORlVsUkpSa2xEUVZSRkxTMHRMUzBLIiwic2lnIjoiVFVWVlEwbERWV2hCVm1WM1puZExiR3MxWmxaNmNGSkVWVkJvUlhjNVR6aEpNbkI0UXpWdVZHNVFabGxFUW5OUFFXbEZRVEJhUm5Gek9UbFJaMUk1YlVGMFJrMVhkRmR5VDJwdFZVTTBOM3BuWVc5dmJFdEpiMHhJTDA5M1pFMDkifV19LCJoYXNoIjp7ImFsZ29yaXRobSI6InNoYTI1NiIsInZhbHVlIjoiZGNiNDkyNTljODY2MDdjMzQ2MzVkYWJiNDQzMWYwNjVlOWE3YTczNDcwNGNiNzNmMGFhMGY2YWFhMzg5NmEwNCJ9LCJwYXlsb2FkSGFzaCI6eyJhbGdvcml0aG0iOiJzaGEyNTYiLCJ2YWx1ZSI6IjY4ZTY1NmIyNTFlNjdlODM1OGJlZjg0ODNhYjBkNTFjNjYxOWYzZTdhMWE5ZjBlNzU4MzhkNDFmZjM2OGY3MjgifX19fQ==',
          },
        ],
        timestampVerificationData: { rfc3161Timestamps: [] },
      },
      dsseEnvelope: {
        payload: 'aGVsbG8sIHdvcmxkIQ==',
        payloadType: 'text/plain',
        signatures: [
          {
            sig: 'MEUCICUhAVewfwKlk5fVzpRDUPhEw9O8I2pxC5nTnPfYDBsOAiEA0ZFqs99QgR9mAtFMWtWrOjmUC47zgaoolKIoLH/OwdM=',
            keyid: '',
          },
        ],
      },
    },
  },
};

export const v2 = {
  messageSignature: {
    withSigningCert: {
      mediaType: 'application/vnd.dev.sigstore.bundle+json;version=0.2',
      verificationMaterial: {
        x509CertificateChain: {
          certificates: [
            {
              rawBytes:
                'MIICoDCCAiagAwIBAgIUevae+nLQ8mg6OyOB43MKJ10F2CEwCgYIKoZIzj0EAwMwNzEVMBMGA1UEChMMc2lnc3RvcmUuZGV2MR4wHAYDVQQDExVzaWdzdG9yZS1pbnRlcm1lZGlhdGUwHhcNMjIxMTA5MDEzMzA5WhcNMjIxMTA5MDE0MzA5WjAAMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE9DbYBIMQLtWb6J5gtL69jgRwwEfdtQtKvvG4+o3ZzlOroJplpXaVgF6wBDob++rNG9/AzSaBmApkEwI52XBjWqOCAUUwggFBMA4GA1UdDwEB/wQEAwIHgDATBgNVHSUEDDAKBggrBgEFBQcDAzAdBgNVHQ4EFgQUVIIFc08z6uV9Y96S+v5oDbbmHEYwHwYDVR0jBBgwFoAU39Ppz1YkEZb5qNjpKFWixi4YZD8wHwYDVR0RAQH/BBUwE4ERYnJpYW5AZGVoYW1lci5jb20wLAYKKwYBBAGDvzABAQQeaHR0cHM6Ly9naXRodWIuY29tL2xvZ2luL29hdXRoMIGKBgorBgEEAdZ5AgQCBHwEegB4AHYA3T0wasbHETJjGR4cmWc3AqJKXrjePK3/h4pygC8p7o4AAAGEWgUGQwAABAMARzBFAiEAlKycMBC2q+QM+mct60RNENxpURHes6vgOBWdx71XcXgCIAtnMzw/cBw5h0hrYJ8b1PJjoxn3k1N2TdgofqvMhbSTMAoGCCqGSM49BAMDA2gAMGUCMQC2KLFYSiD/+S1WEsyf9czf52w+E577Hi77r8pGUM1rQ/Bzg1aGvQs0/kAg3S/JSDgCMEdN5dIS0tRm1SOMbOFcW+1yzR+OiCVJ7DVFwUdI3D/7ERxtN9e/LJ6uaRnR/Sanrw==',
            },
          ],
        },
        tlogEntries: [
          {
            logIndex: '6757503',
            logId: { keyId: 'wNI9atQGlz+VWfO6LRygH4QUfY/8W4RFwiT5i5WRgB0=' },
            kindVersion: { kind: 'hashedrekord', version: '0.0.1' },
            integratedTime: '1667957590',
            inclusionProof: {
              logIndex: '2594072',
              rootHash: 'kAnoYYy8iB3NjC5tE2l6pGBqY3uw3CBJ6x2cBBQXu0U=',
              treeSize: '22954907',
              hashes: [
                'qEpgYkIiW7jVzbHp54MraVJQ1AE72Zvr5XSohvcdBN4=',
                'wtdXKmzwBO1Lr1bY5gOXpVUiP0OxYRRa9ZodfVYRKw8=',
                'ikD2dl7XVH3EKAPc6k21SYog5TYdwp/8DayXZ8Eedtw=',
                '3oHeiTXTqKZMOpundZhKh4c6dznt7SdFj88Gog5DCYY=',
                '4By9NfYQqHZOn5CusfRqIGw9/NeQr5E1nG4ICulNnUo=',
                'p3BgRy0uSg6SRAqcKt8qXUIDhhJhox1tCAIaHdT5tac=',
                'lJvUc0jjih3wNA1S7cbtw1q5HYX3JxYY5fO9ytPIKLU=',
                '5vWL6hRP9EBDNAuXS3E236YUwutNv6qvIWTfcdzywFA=',
                '1ODC3wToc5Hqky2sJQ2w3mBFggDWdZROOAv4MXWWLw0=',
                'QqwionvWKT5a3Kqsx1UWIYDsBIMK7H+pvKZNon1g4A4=',
                '9Ckxujk8Sg094zTRpBWmwd4ZWNT7W72H/S2JPKbZiBY=',
                '/gKT0/YRP2WbANUct+sWMGGQ2a9lQlNFBb/XYAhb/j8=',
                'f+eeYNJFCZRAI6IKsab+xTmMUl9g6Km2h6KUztMHpxM=',
                'P8eLjDLaNzX9cTdqiFIKYjyVJv4cNwxPBh1Ppg8eDvM=',
                '7NR456rTv4HEGWxCwUOTYm7ze69yMkqG4f8MbhE43oU=',
                'Ul2YswjUyBqbJ3eka2zE0MI0QxT4ez8sCJ1Z3+vvMw8=',
                'ucRPSmGLhm/SyHL7chQ5vBEFull08HzsqtAC0TQ91tY=',
                'EiS8ntcvGnB1xcGZg9Cf3fTkV1wBcJNVtSWKIYVZqAU=',
                'Mx1LEx7szsPd62CGkL6HM+NWkOy9YwZTwukJEVgH7Cw=',
                's2Z13KVYurVY6F1AUhr8Uby4RE3RXW1XEC2tWWdzCjI=',
                'QRfYxLEHh/FwMZqWnxNNW+x3lY7o3LM86BW+z0MpMN4=',
                'J0dGjQ7V5bETi7p7eWg2ephCQ32QBLMWY5HxFcuGfR4=',
                'uFGzOQorMYmYZ2yumLpgr1tvXvZaL+tTTCqaXa7Hdds=',
                'Lksw/hm/y+1p33SaEF8/60gPvFVNkueBpDWJ1tAVcAo=',
                'o4Smg8NUiGzxKxvvvgjtH2NV82EZSBLcUDUo9IpzS0Y=',
              ],
              checkpoint: {
                envelope:
                  'rekor.sigstore.dev - 2605736670972794746\n22954907\nkAnoYYy8iB3NjC5tE2l6pGBqY3uw3CBJ6x2cBBQXu0U=\nTimestamp: 1689107716054191855\n\n— rekor.sigstore.dev wNI9ajBFAiEA8OpuifHq4iqd6ZJSRiVQbe00eTdZllaQ51fgfAVxAPkCIDC64vV4bCtkn3S8CyMaTHHWgD2E/a+nm0eFBADK/LFP\n',
              },
            },
            canonicalizedBody:
              'eyJhcGlWZXJzaW9uIjoiMC4wLjEiLCJraW5kIjoiaGFzaGVkcmVrb3JkIiwic3BlYyI6eyJkYXRhIjp7Imhhc2giOnsiYWxnb3JpdGhtIjoic2hhMjU2IiwidmFsdWUiOiI2OGU2NTZiMjUxZTY3ZTgzNThiZWY4NDgzYWIwZDUxYzY2MTlmM2U3YTFhOWYwZTc1ODM4ZDQxZmYzNjhmNzI4In19LCJzaWduYXR1cmUiOnsiY29udGVudCI6Ik1FUUNJSHM1YVV1bHExSHBSK2Z3bVNLcExrL29Bd3E1TzlDRE5GSGhaQUtmRzVHbUFpQndjVm5mMm9ienNDR1ZsZjBBSXZidkhyMjFOWHQ3dHBMQmw0K0JyaDZPS0E9PSIsInB1YmxpY0tleSI6eyJjb250ZW50IjoiTFMwdExTMUNSVWRKVGlCRFJWSlVTVVpKUTBGVVJTMHRMUzB0Q2sxSlNVTnZSRU5EUVdsaFowRjNTVUpCWjBsVlpYWmhaU3R1VEZFNGJXYzJUM2xQUWpRelRVdEtNVEJHTWtORmQwTm5XVWxMYjFwSmVtb3dSVUYzVFhjS1RucEZWazFDVFVkQk1WVkZRMmhOVFdNeWJHNWpNMUoyWTIxVmRWcEhWakpOVWpSM1NFRlpSRlpSVVVSRmVGWjZZVmRrZW1SSE9YbGFVekZ3WW01U2JBcGpiVEZzV2tkc2FHUkhWWGRJYUdOT1RXcEplRTFVUVRWTlJFVjZUWHBCTlZkb1kwNU5ha2w0VFZSQk5VMUVSVEJOZWtFMVYycEJRVTFHYTNkRmQxbElDa3R2V2tsNmFqQkRRVkZaU1V0dldrbDZhakJFUVZGalJGRm5RVVU1UkdKWlFrbE5VVXgwVjJJMlNqVm5kRXcyT1dwblVuZDNSV1prZEZGMFMzWjJSelFLSzI4elducHNUM0p2U25Cc2NGaGhWbWRHTm5kQ1JHOWlLeXR5VGtjNUwwRjZVMkZDYlVGd2EwVjNTVFV5V0VKcVYzRlBRMEZWVlhkblowWkNUVUUwUndwQk1WVmtSSGRGUWk5M1VVVkJkMGxJWjBSQlZFSm5UbFpJVTFWRlJFUkJTMEpuWjNKQ1owVkdRbEZqUkVGNlFXUkNaMDVXU0ZFMFJVWm5VVlZXU1VsR0NtTXdPSG8yZFZZNVdUazJVeXQyTlc5RVltSnRTRVZaZDBoM1dVUldVakJxUWtKbmQwWnZRVlV6T1ZCd2VqRlphMFZhWWpWeFRtcHdTMFpYYVhocE5Ga0tXa1E0ZDBoM1dVUldVakJTUVZGSUwwSkNWWGRGTkVWU1dXNUtjRmxYTlVGYVIxWnZXVmN4YkdOcE5XcGlNakIzVEVGWlMwdDNXVUpDUVVkRWRucEJRZ3BCVVZGbFlVaFNNR05JVFRaTWVUbHVZVmhTYjJSWFNYVlpNamwwVERKNGRsb3liSFZNTWpsb1pGaFNiMDFKUjB0Q1oyOXlRbWRGUlVGa1dqVkJaMUZEQ2tKSWQwVmxaMEkwUVVoWlFUTlVNSGRoYzJKSVJWUktha2RTTkdOdFYyTXpRWEZLUzFoeWFtVlFTek12YURSd2VXZERPSEEzYnpSQlFVRkhSVmRuVlVjS1VYZEJRVUpCVFVGU2VrSkdRV2xGUVd4TGVXTk5Ra015Y1N0UlRTdHRZM1EyTUZKT1JVNTRjRlZTU0dWek5uWm5UMEpYWkhnM01WaGpXR2REU1VGMGJncE5lbmN2WTBKM05XZ3dhSEpaU2poaU1WQkthbTk0YmpOck1VNHlWR1JuYjJaeGRrMW9ZbE5VVFVGdlIwTkRjVWRUVFRRNVFrRk5SRUV5WjBGTlIxVkRDazFSUXpKTFRFWlpVMmxFTHl0VE1WZEZjM2xtT1dONlpqVXlkeXRGTlRjM1NHazNOM0k0Y0VkVlRURnlVUzlDZW1jeFlVZDJVWE13TDJ0Qlp6TlRMMG9LVTBSblEwMUZaRTQxWkVsVE1IUlNiVEZUVDAxaVQwWmpWeXN4ZVhwU0swOXBRMVpLTjBSV1JuZFZaRWt6UkM4M1JWSjRkRTQ1WlM5TVNqWjFZVkp1VWdvdlUyRnVjbmM5UFFvdExTMHRMVVZPUkNCRFJWSlVTVVpKUTBGVVJTMHRMUzB0Q2c9PSJ9fX19',
          },
        ],
        timestampVerificationData: { rfc3161Timestamps: [] },
      },
      messageSignature: {
        messageDigest: {
          algorithm: 'SHA2_256',
          digest: 'aOZWslHmfoNYvvhIOrDVHGYZ8+ehqfDnWDjUH/No9yg=',
        },
        signature:
          'MEQCIHs5aUulq1HpR+fwmSKpLk/oAwq5O9CDNFHhZAKfG5GmAiBwcVnf2obzsCGVlf0AIvbvHr21NXt7tpLBl4+Brh6OKA==',
      },
    },
  },
};

export const artifact = Buffer.from('hello, world!');

export const publicKeys: Record<string, string> = {
  'key-1': `-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEGg6Hjxt2UNiJ1kwwq5XQIIwMZnJf
VQ3bF01uZKteMdcV/3qhCmWOecoxRqwrbYTshGg9NyXcBbve6zKwZVTLeg==
-----END PUBLIC KEY-----`,
};
