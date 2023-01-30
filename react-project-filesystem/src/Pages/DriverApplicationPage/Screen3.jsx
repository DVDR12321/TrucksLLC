import { Button, Grid, TextField, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import SignaturePad from "react-signature-pad";
import {
  StyledDiv,
  StyledHeader1,
  StyledHeader2,
  StyledHeader3,
  Styledp1,
  StyledSpan,
} from "./StyledComponents";
import React, { useState } from "react";

import { useRef } from "react";
import SnackBarComponent from "../../components/SnackBar/SnackBarComponent";

const Screen3 = (props) => {
  const { state, setState } = props;
  const [sent, setSent] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [message, setMessage] = useState("");

  function reloadWithDelay() {
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  }

  //signature pad stuff
  let SigPad = useRef({});
  let data = "";
  const clear = () => {
    SigPad.current.clear();
  };
  const save = () => {
    data = SigPad.current.toDataURL();
    setState((state) => ({
      ...state,
      Signature: data,
    }));
    console.log(state);
  };
  const show = () => {
    SigPad.current.fromDataURL(data);
  };

  // email sending
  const handleSubmit = () => {
    if (state.Signature === "") {
      setMessage("Sign the document and 'save' please");
      setSnackbar(true);
      return;
    } else if (
      state.FirstName === "" ||
      state.LastName === "" ||
      state.Email === "" ||
      state.PhoneNumber === "" ||
      state.EmailCheck === "" ||
      state.PhoneNumberCheck === "" ||
      state.PhoneNumberCheck !== state.PhoneNumber ||
      state.Email !== state.EmailCheck
    ) {
      setMessage("Data from page one is incorrectly entered");
      setSnackbar(true);
    } else {
      setSent(true);
      const options = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      };
      fetch("http://localhost:4000/api/mailer", options)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          setSent(false);
          setMessage("Data submitted successfully!");
          setSnackbar(true);
          reloadWithDelay();
        })
        .catch((res) => {
          console.log(res);
          setSent(false);
          setMessage("Failed submitting data");
          setSnackbar(true);
        });
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <StyledHeader1>
          THE BELOW DISCLOSURE AND AUTHORIZATION LANGUAGE IS FOR MANDATORY USE
          BY ALL ACCOUNT HOLDERS
        </StyledHeader1>
        <StyledHeader2>IMPORTANT DISCLOSURE</StyledHeader2>
        <StyledHeader3>
          REGARDING BACKGROUND REPORTS FROM THE PSP Online Service
        </StyledHeader3>
      </Grid>
      <Grid item xs={12}>
        <Styledp1>
          In connection with your application for employment with Trucks
          LLC("Prospective Employer"), Prospective Employer, its employees,
          agents or contractors may obtain one or more reports regarding your
          driving, and safety inspection history from the Federal Motor Carrier
          Safety Administration (FMCSA). When the application for employment is
          submitted in person, ifthe Prospective Employer uses any infonnation
          it obtains from FMCSA in a decision to not hire you or to make any
          other adverse employment decision regarding you, the Prospective
          Employer will provide you with a copy of the report upon which its
          decision was based and a written summary of your rights under the Fair
          Credit Reporting Act before taking any final adverse action. If any
          final adverse action is taken against you based upon your driving
          history or safety report, the Prospective Employer will notify you
          that the action has been taken and that the action was based in part
          or in whole on this report. When the application for employment is
          submitted by mail, telephone, computer, or other similar means, if the
          Prospective Employer uses any information it obtains from FMCSA in a
          decision to not hire you orto make any other adverse employment
          decision regarding you, the Prospective Employer must provide you
          within three business days of taking adverse action oral, written or
          electronic notification: that adverse action has been taken based in
          whole or in part on information obtained from FMCSA; the name,
          address, and the toll free telephone number ofFMCSA; that the FMCSA
          did not make the decision to take the adverse action and is unable to
          provide you the specific reasons why the adverse action was taken; and
          that you may, upon providing proper identification, request a free
          copy of the report and may dispute with the FMCSA the accuracy or
          completeness of any information or report.
        </Styledp1>
        <Styledp1>
          If you request a copy of a driver record from the Prospective Employer
          who procured the report, then, within 3 business days of receiving
          your request, together with proper identification, the Prospective
          Employer must send or provide to you a copy of your report and a
          summary of your rights under the Fair Credit Reporting Act. Neither
          the Prospective Employer nor the FMCSA contractor supplying the crash
          and safety information has the capability to correct any safety data
          that appears to be incorrect. You may challenge the accuracy of the
          data by submitting a request to https://dataqs.fmcsa.dot.gov. Ifyou
          challenge crash or inspection information reported by a State, FMCSA
          cannot change or correct this data. Your request will be forwarded by
          the DataQs system to the appropriate State for adjudication. Any crash
          or inspection in which you were involved will display on your PSP
          report. Since the PSP report does not report, or assign, or imply
          fault, it will include ali Commercial Motor Vehicle (CMV) crashes
          where you were a driver orco-driver and where those crashes were
          reported to FMCSA, regardless of fault. Similarly, ali inspections,
          with or without violations, appear on the PSP report. State citations
          associated with Federal Motor Carrier Safety Regulations (FMCSR)
          violations that have been adjudicated by a court of law will also
          appear, and remain, on a PSP report. The Prospective Employer cannot
          obtain background reports from FMCSA without your authorization.
        </Styledp1>
        <Grid item xs={12}>
          <StyledHeader3>AUTHORIZATION</StyledHeader3>
          <Styledp1>
            If you agree that the Prospective Employer may obtain such
            background reports, please read the following and sign below:
            <StyledSpan>
              {" "}
              I authorize Trucks LLC("Prospective Employer") to access the FMCSA
              Pre-Employment Screening Program (PSP)system to seek information
              regarding my commercial driving safety record and information
              regarding my safety inspection history.
            </StyledSpan>{" "}
            I understand that I am authorizing the release of safety performance
            information including crash data from the previous five (5) years
            and inspection history from the previous three (3) years. I
            understand and acknowledge that this release ofinformation may
            assist the Prospective Employer to make a detennination regarding my
            suitability as an employee. I further understand that neither the
            Prospective Employer nor the FMCSA contractor supplying the crash
            and safety information has the capability to correct any safety data
            that appears to be incorrect. I understand I may challenge the
            accuracy ofthe data by submitting a request to
            https://dataqs.fmcsa.dot.gov. Ifl challenge crash or inspection
            infonnation reported by a State, FMCSA cannot change or correct this
            data. I understand my request will be forwarded by the DataQs system
            to the appropriate State for adjudication. I understand that any
            crash or inspection in which I was involved will display on my PSP
            report. Since the PSP report does not report, or assign, or imply
            fault, I acknowledge it will include all CMV crashes where I was a
            driver or co-driver and where those crashes were reported to FMCSA,
            regardless of fault. Similarly, I understand all inspections, with
            or without violations, will appear on my PSP report, and State
            citations associated with FMCSR violations that have been
            adjudicated by a court of law will also appear, and remain, on my
            PSP report. I have read the above Disclosure Regarding Background
            Reports provided to me by Prospective Employer and I understand that
            if I sign this Disclosure and Authorization , Prospective Employer
            may obtain a report ofmy crash and inspection history. I hereby
            authorize Prospective Employer and its employees, authorized agents,
            and/or affiliates to obtain the information authorized above.
          </Styledp1>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={0} md={6}></Grid>
          <Grid item xs={12} md={3}>
            {" "}
            <TextField
              fullWidth
              type="text"
              required
              label="Printed Name"
            ></TextField>
          </Grid>

          <Grid item xs={12} md={3}>
            {" "}
            <TextField fullWidth type="date" required></TextField>
          </Grid>

          <Grid item xs={0} md={9}></Grid>
          <Grid item xs={12} md={3}>
            <Typography gutterBottom sx={{ textAlign: "center" }} variant="h5">
              Your written signature:
            </Typography>
          </Grid>
          <Grid item xs={0} md={9}></Grid>
          <Grid item xs={12} md={3}>
            <StyledDiv>
              <SignaturePad ref={SigPad} penColor="red"></SignaturePad>
            </StyledDiv>
          </Grid>
          <Grid item xs={0} md={9}></Grid>
          <Grid item xs={12} md={1}>
            <Button
              fullWidth
              onClick={clear}
              variant="outlined"
              color="primary"
              endIcon={<DeleteOutlineOutlinedIcon />}
            >
              Clear
            </Button>
          </Grid>
          <Grid item xs={12} md={1}>
            <Button
              fullWidth
              onClick={save}
              variant="outlined"
              endIcon={<SaveAltOutlinedIcon />}
            >
              Save
            </Button>
          </Grid>
          <Grid item xs={12} md={1}>
            <Button
              fullWidth
              onClick={show}
              variant="outlined"
              endIcon={<UndoOutlinedIcon />}
            >
              Show
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Styledp1>
            <StyledSpan>NOTICE:</StyledSpan> This form is made available to
            monthly account holders by NIC on behalf of the U.S. Department of
            Transportation, Federal Motor Carrier Safety Administration (FMCSA).
            Account holders are required by federal law to obtain an Applicant's
            written or electronic consent prior to accessing the Applicant ' s
            PSP report. Further, account holders are required by FMCSA to use
            the language contained in this Disclosure and Authorization form to
            obtain an Applicant ' s consent. The language must be used in whole,
            exactly as provided. Further, the language on this form must exist
            as one stand-alone document. The language may NOT be included with
            other consent forms or any other language.
          </Styledp1>
          <Styledp1>
            <StyledSpan>NOTICE:</StyledSpan> The prospective employment concept
            referenced in this form contemplates the definition of "employee"
            contained at 49 C.F.R. 383.5.
          </Styledp1>
          <Styledp1>LAST UPDATED 2/11/2016</Styledp1>
        </Grid>
      </Grid>
      <Grid item xs={0} md={8}></Grid>
      <Grid item xs={12} md={4} sx={{ marginBottom: "5vh" }}>
        <Button variant="outlined" disabled={sent} onClick={handleSubmit}>
          {sent ? "Sending..." : "Submit Application"}
        </Button>
        <SnackBarComponent
          snackbar={snackbar}
          setSnackbar={setSnackbar}
          message={message}
          setMessage={setMessage}
        ></SnackBarComponent>
      </Grid>
    </Grid>
  );
};
export default Screen3;
