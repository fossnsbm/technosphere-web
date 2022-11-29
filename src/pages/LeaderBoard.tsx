import "../styles/challenges.scss";
import logo from "../assets/Technosphere - Purple.svg";
import HeaderMenus from "../components/headerMenus/headerMenus";
import {
  Typography,
  Container,
  Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  LinearProgress,
} from "@mui/material";
// import Chart from "react-apexcharts";
import { GetLeaderBoard } from "../services/react-query/leaderboard/useLeaderBoard";

export const LeaderBoardPage = () => {
  const data = GetLeaderBoard();
  return (
    <Box className="challenges">
      <Container>
        <HeaderMenus />
          <Typography className="ctf-title-main">Scoreboard</Typography>

        <TableContainer component={Box} sx={{ pb: '120px' }}>
          {data.isLoading && (
            <>
              <LinearProgress />
            </>
          )}

          <Table sx={{ minWidth: '100%' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h5" fontWeight={900}>
                    {" "}
                    User
                  </Typography>
                </TableCell>

                <TableCell align="right">
                  <Typography variant="h5" fontWeight={900}>
                    {" "}
                    Points
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.isSuccess && (
                <>
                  {data.data.values.map(
                    (details: {
                      _id: string;
                      user: {
                        _id: string;
                        email: string;
                        fullName: string;
                        profileImgUrl: string;
                      };
                      points: number;
                      history: string[];
                    }) => {
                      return (
                        <>
                          <TableRow
                            key={details._id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              <Typography variant="h6" fontWeight={400}>
                                {details.user.fullName}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography variant="h6" fontWeight={900}>
                                {details.points}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        </>
                      );
                    }
                  )}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};
