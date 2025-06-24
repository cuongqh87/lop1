document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded');

    // --- KHAI BÁO BIẾN ---
    const lop1Link = document.querySelector('.has-submenu > a');
    const submenu = document.querySelector('.has-submenu > .submenu');
    const submenuLinks = document.querySelectorAll('.submenu a');
    let commentLookup = {};

    // Môn Tiếng Việt
    const tvContent = document.getElementById('tv-content');
    const tvSample = document.getElementById('tv-sample');
    const nhapNhanXetBtnTV = document.getElementById('nhap-nhan-xet-btn');
    const copyBangDiemBtnTV = document.getElementById('copy-bang-diem-btn');
    const bangMonTV = document.getElementById('bang-mon-tv');
    const bangMauNhanXetTV = document.getElementById('bang-mau-nhan-xet');
    const exportTvMauBtn = document.getElementById('export-tv-mau-btn');
    const importTvMauBtn = document.getElementById('import-tv-mau-btn');
    const importTvMauInput = document.getElementById('import-tv-mau-input');

    // Môn Toán
    const toanContent = document.getElementById('toan-content');
    const toanSample = document.getElementById('toan-sample');
    const nhapNhanXetBtnToan = document.getElementById('nhap-nhan-xet-toan-btn');
    const copyBangDiemBtnToan = document.getElementById('copy-bang-diem-toan-btn');
    const bangMonToan = document.getElementById('bang-mon-toan');
    const bangMauNhanXetToan = document.getElementById('bang-mau-nhan-xet-toan');
    const exportToanMauBtn = document.getElementById('export-toan-mau-btn');
    const importToanMauBtn = document.getElementById('import-toan-mau-btn');
    const importToanMauInput = document.getElementById('import-toan-mau-input');

    // Môn TNXH
    const tnxhContent = document.getElementById('tnxh-content');
    const tnxhSample = document.getElementById('tnxh-sample');
    const nhapNhanXetBtnTNXH = document.getElementById('nhap-nhan-xet-tnxh-btn');
    const copyBangDiemBtnTNXH = document.getElementById('copy-bang-diem-tnxh-btn');
    const bangMonTNXH = document.getElementById('bang-mon-tnxh');
    const bangMauNhanXetTNXH = document.getElementById('bang-mau-nhan-xet-tnxh');
    const exportTnxhMauBtn = document.getElementById('export-tnxh-mau-btn');
    const importTnxhMauBtn = document.getElementById('import-tnxh-mau-btn');
    const importTnxhMauInput = document.getElementById('import-tnxh-mau-input');

    // Môn HDTN
    const hdtnContent = document.getElementById('hdtn-content');
    const hdtnSample = document.getElementById('hdtn-sample');
    const nhapNhanXetBtnHDTN = document.getElementById('nhap-nhan-xet-hdtn-btn');
    const copyBangDiemBtnHDTN = document.getElementById('copy-bang-diem-hdtn-btn');
    const bangMonHDTN = document.getElementById('bang-mon-hdtn');
    const bangMauNhanXetHDTN = document.getElementById('bang-mau-nhan-xet-hdtn');
    const exportHdtnMauBtn = document.getElementById('export-hdtn-mau-btn');
    const importHdtnMauBtn = document.getElementById('import-hdtn-mau-btn');
    const importHdtnMauInput = document.getElementById('import-hdtn-mau-input');
    
    // Môn Đạo đức
    const daoducContent = document.getElementById('daoduc-content');
    const daoducSample = document.getElementById('daoduc-sample');
    const nhapNhanXetBtnDaoDuc = document.getElementById('nhap-nhan-xet-daoduc-btn');
    const copyBangDiemBtnDaoDuc = document.getElementById('copy-bang-diem-daoduc-btn');
    const bangMonDaoDuc = document.getElementById('bang-mon-daoduc');
    const bangMauNhanXetDaoDuc = document.getElementById('bang-mau-nhan-xet-daoduc');
    const exportDaoDucMauBtn = document.getElementById('export-daoduc-mau-btn');
    const importDaoDucMauBtn = document.getElementById('import-daoduc-mau-btn');
    const importDaoDucMauInput = document.getElementById('import-daoduc-mau-input');
    
    // Môn Âm Nhạc
    const amnhacContent = document.getElementById('amnhac-content');
    const amnhacSample = document.getElementById('amnhac-sample');
    const nhapNhanXetBtnAmNhac = document.getElementById('nhap-nhan-xet-amnhac-btn');
    const copyBangDiemBtnAmNhac = document.getElementById('copy-bang-diem-amnhac-btn');
    const bangMonAmNhac = document.getElementById('bang-mon-amnhac');
    const bangMauNhanXetAmNhac = document.getElementById('bang-mau-nhan-xet-amnhac');
    const exportAmNhacMauBtn = document.getElementById('export-amnhac-mau-btn');
    const importAmNhacMauBtn = document.getElementById('import-amnhac-mau-btn');
    const importAmNhacMauInput = document.getElementById('import-amnhac-mau-input');

    // Môn Mĩ Thuật
    const mithuatContent = document.getElementById('mithuat-content');
    const mithuatSample = document.getElementById('mithuat-sample');
    const nhapNhanXetBtnMiThuat = document.getElementById('nhap-nhan-xet-mithuat-btn');
    const copyBangDiemBtnMiThuat = document.getElementById('copy-bang-diem-mithuat-btn');
    const bangMonMiThuat = document.getElementById('bang-mon-mithuat');
    const bangMauNhanXetMiThuat = document.getElementById('bang-mau-nhan-xet-mithuat');
    const exportMiThuatMauBtn = document.getElementById('export-mithuat-mau-btn');
    const importMiThuatMauBtn = document.getElementById('import-mithuat-mau-btn');
    const importMiThuatMauInput = document.getElementById('import-mithuat-mau-input');
    
    // Môn GDTC
    const gdtcContent = document.getElementById('gdtc-content');
    const gdtcSample = document.getElementById('gdtc-sample');
    const nhapNhanXetBtnGDTC = document.getElementById('nhap-nhan-xet-gdtc-btn');
    const copyBangDiemBtnGDTC = document.getElementById('copy-bang-diem-gdtc-btn');
    const bangMonGDTC = document.getElementById('bang-mon-gdtc');
    const bangMauNhanXetGDTC = document.getElementById('bang-mau-nhan-xet-gdtc');
    const exportGdtcMauBtn = document.getElementById('export-gdtc-mau-btn');
    const importGdtcMauBtn = document.getElementById('import-gdtc-mau-btn');
    const importGdtcMauInput = document.getElementById('import-gdtc-mau-input');
    
    // Năng lực - Phẩm chất
    const nlpcContent = document.getElementById('nlpc-content');
    const copyBangDiemBtnNLPC = document.getElementById('copy-bang-diem-nlpc-btn');
    const bangMonNLPC = document.getElementById('bang-mon-nlpc');
    const nhapNlpcBtn = document.getElementById('nhap-nlpc-btn');

    // Mẫu NX
    const mauNxContent = document.getElementById('mau-nx-content');
    const bangMauNxNlpc = document.getElementById('bang-mau-nx-nlpc');
    const exportMauNxBtn = document.getElementById('export-mau-nx-btn');
    const importMauNxBtn = document.getElementById('import-mau-nx-btn');
    const importMauNxInput = document.getElementById('import-mau-nx-input');

    // Hằng số cho các danh mục NL-PC để đảm bảo nhất quán
    const NLPC_CATEGORIES = [
        'Tự chủ và tự học', 'Giao tiếp và hợp tác', 'GQVĐ và sáng tạo',
        'Ngôn ngữ', 'Tính toán', 'Khoa học', 'Thẩm mĩ', 'Thể chất',
        'Yêu nước', 'Nhân ái', 'Chăm chỉ', 'Trung thực', 'Trách nhiệm'
    ];
    
    // --- CÁC HÀM TIỆN ÍCH CHUNG ---

    function hideAllSubjectContent() {
        // Mảng chứa tất cả các container và phần tử cần ẩn
        const allContent = [
            tvContent, tvSample, toanContent, toanSample, tnxhContent, tnxhSample, 
            hdtnContent, hdtnSample, daoducContent, daoducSample, amnhacContent, amnhacSample, 
            mithuatContent, mithuatSample, gdtcContent, gdtcSample, nlpcContent, mauNxContent
        ];
        allContent.forEach(el => { if (el) el.style.display = 'none'; });
    }

    function updateXLColumn(tableElement) {
        const tableBody = tableElement.querySelector('tbody');
        if (!tableBody) return;
        tableBody.querySelectorAll('tr').forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length > 5) {
                const diemKTValue = parseFloat(cells[4].textContent.trim());
                if (!isNaN(diemKTValue)) {
                    if (diemKTValue > 6) cells[5].textContent = 'T';
                    else if (diemKTValue >= 5) cells[5].textContent = 'H';
                    else cells[5].textContent = 'C';
                } else { cells[5].textContent = ''; }
            }
        });
    }

    function buildCommentLookup(sampleTableElement) {
        const lookup = {};
        const tableBody = sampleTableElement.querySelector('tbody');
        if (!tableBody) return lookup;
        let currentKey = null; 
        tableBody.querySelectorAll('tr').forEach(row => {
            const cells = Array.from(row.querySelectorAll('td'));
            let potentialCommentCell = null;
            const keyCell = cells.find(cell => cell.hasAttribute('rowspan'));
            if (keyCell) {
                const text = keyCell.textContent.trim();
                if (text.includes('(T)')) currentKey = 'T';
                else if (text.includes('Đạt') || text.includes('(H)')) currentKey = 'H';
                else if (text.includes('(C)')) currentKey = 'C';
                else currentKey = text;
                potentialCommentCell = cells[1];
            } else {
                potentialCommentCell = cells[0];
            }
            if (currentKey && potentialCommentCell) {
                const contentSpan = potentialCommentCell.querySelector('.content');
                const contentText = contentSpan ? contentSpan.textContent.trim() : potentialCommentCell.textContent.trim();
                if (contentText) {
                    if (!lookup[currentKey]) lookup[currentKey] = [];
                    lookup[currentKey].push(contentText);
                }
            }
        });
        return lookup;
    }

    /**
     * Xây dựng một đối tượng tra cứu nhận xét cho môn Tiếng Việt.
     * Cấu trúc dữ liệu trả về: { 'ĐỌC': { '10': ['comment'], '9': [...] }, 'VIẾT': { ... }, ... }
     * @param {HTMLElement} sampleTableElement - Bảng HTML chứa các nhận xét mẫu.
     * @returns {Object} - Đối tượng tra cứu được cấu trúc theo hạng mục và điểm số.
     */
    function buildTvCommentLookup(sampleTableElement) {
        const lookup = {
            'ĐỌC': {},
            'VIẾT': {},
            'NGHE VÀ NÓI': {}
        };
        const tableBody = sampleTableElement.querySelector('tbody');
        if (!tableBody) return lookup;

        let currentCategory = '';
        tableBody.querySelectorAll('tr').forEach(row => {
            const cells = Array.from(row.cells);
            // Tìm ô chứa tên hạng mục (ĐỌC, VIẾT, NGHE VÀ NÓI)
            const categoryCell = cells.find(cell => cell.getAttribute('rowspan') && ['ĐỌC', 'VIẾT', 'NGHE VÀ NÓI'].includes(cell.textContent.trim()));
            
            if (categoryCell) {
                currentCategory = categoryCell.textContent.trim();
            }

            if (currentCategory) {
                // Tìm ô điểm số (là một số)
                const scoreCell = cells.find(cell => /^\d+$/.test(cell.textContent.trim()));
                const contentCell = scoreCell ? scoreCell.nextElementSibling : null;
                const contentSpan = contentCell ? contentCell.querySelector('.content') : null;

                if (scoreCell && contentSpan) {
                    const score = scoreCell.textContent.trim();
                    const comment = contentSpan.textContent.trim();

                    if (!lookup[currentCategory][score]) {
                        lookup[currentCategory][score] = [];
                    }
                    lookup[currentCategory][score].push(comment);
                }
            }
        });
        return lookup;
    }
    
    function handlePasteData(event, tableElement) {
        event.preventDefault();
        const clipboardData = event.clipboardData || window.clipboardData;
        const pastedData = clipboardData.getData('text');
        const tbody = tableElement.querySelector('tbody');
        if (!tbody) return;
        tbody.innerHTML = ''; // Clear existing rows
        const rows = pastedData.split('\n').filter(row => row.trim() !== ''); // Split into rows and remove empty ones
    
        rows.forEach(row => {
            const tr = document.createElement('tr');
            const pastedCells = row.split('\t'); // Split each row into cells by tab
            pastedCells.forEach(cellData => {
                const td = document.createElement('td');
                // Loại bỏ dấu ngoặc kép có thể có khi dán từ một số ứng dụng
                td.textContent = cellData.trim().replace(/^"|"$/g, '');
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        
        // Kiểm tra xem có cần cập nhật cột XL không
        if (tableElement.id === 'bang-mon-tv' || tableElement.id === 'bang-mon-toan') {
            updateXLColumn(tableElement);
        }
    }
    
    function copySubjectTableData(tableElement) {
        const body = tableElement.querySelector('tbody');
        if (!body) return;
        let dataToCopy = '';
        body.querySelectorAll('tr').forEach(row => {
            const rowData = [];
            const cells = row.querySelectorAll('td');
            if (cells.length > 0) {
                rowData.push(cells[0].textContent.trim()); // STT
                rowData.push(''); // Cột trống
                for (let i = 1; i < cells.length; i++) {
                    rowData.push(cells[i].textContent.trim());
                }
            }
            dataToCopy += rowData.join('\t') + '\n';
        });
        navigator.clipboard.writeText(dataToCopy)
            .then(() => alert(`Đã sao chép dữ liệu!`))
            .catch(err => alert(`Lỗi khi sao chép: ${err}`));
    }
    
    function copyAndCombineNlpcData(tableElement) {
        const body = tableElement.querySelector('tbody');
        if (!body || body.rows.length === 0) {
            alert('Không có dữ liệu để chuyển.');
            return;
        }
    
        // Hàm trợ giúp để gộp các nhận xét
        const joinComments = (comments) => {
            const cleaned = comments
                .map(c => c.trim().replace(/\.$/, '')) // Xóa dấu chấm ở cuối mỗi nhận xét
                .filter(c => c); // Lọc ra các nhận xét rỗng
            
            if (cleaned.length === 0) return '';
            
            // Nối bằng ". " và thêm một dấu chấm ở cuối
            return cleaned.join('. ') + '.';
        };
    
        let dataToCopy = '';
        const rows = body.querySelectorAll('tr');
    
        rows.forEach(row => {
            const cells = Array.from(row.querySelectorAll('td'));
            if (cells.length < 17) return; // Đảm bảo hàng có đủ ô (4 thông tin + 13 nhận xét)
    
            const allComments = cells.slice(4).map(td => td.textContent.trim());
    
            // Phân nhóm nhận xét gốc
            const nlChungOriginal = allComments.slice(0, 3);
            const nlDacThuOriginal = allComments.slice(3, 8); // 5 năng lực đặc thù
            const phamChatOriginal = allComments.slice(8, 13); // 5 phẩm chất
    
            // Tạo các nhận xét được gộp lại
            const nlChungCombined = joinComments(nlChungOriginal);
            const nlDacThuCombined = joinComments(nlDacThuOriginal);
            const phamChatCombined = joinComments(phamChatOriginal);
    
            // Xây dựng hàng dữ liệu cuối cùng cho clipboard theo thứ tự đã chỉ định
            const rowData = [
                nlChungCombined,
                ...nlChungOriginal,
                nlDacThuCombined,
                ...nlDacThuOriginal,
                phamChatCombined,
                ...phamChatOriginal
            ];
    
            dataToCopy += rowData.join('\t') + '\n';
        });
    
        if (dataToCopy) {
            navigator.clipboard.writeText(dataToCopy.trim())
                .then(() => alert('Đã sao chép nội dung NL-PC theo mẫu! Bạn có thể dán vào file Excel.'))
                .catch(err => alert(`Lỗi khi sao chép: ${err}`));
        } else {
            alert('Không có dữ liệu để tổng hợp và sao chép.');
        }
    }

    function exportToExcel(tableElement, fileName) {
        const rows = tableElement.querySelectorAll('tbody tr');
        const dataForExport = [["Phân loại/Điểm số", "Nội dung"]];
        let tempKey = "";
        rows.forEach(row => {
            const contentSpan = row.querySelector('.content');
            if (!contentSpan) return;
            const keyCell = row.querySelector('td[rowspan]');
            if (keyCell) {
                tempKey = keyCell.textContent.trim();
            } else {
                 const scoreCell = Array.from(row.querySelectorAll('td')).find(cell => !isNaN(parseInt(cell.textContent.trim(), 10)) && cell.nextElementSibling);
                 if (scoreCell) tempKey = scoreCell.textContent.trim();
            }
            const content = contentSpan.textContent.trim();
            dataForExport.push([tempKey, content]);
        });
        const worksheet = XLSX.utils.aoa_to_sheet(dataForExport);
        worksheet['!cols'] = [{ wch: 20 }, { wch: 80 }];
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "NhanXetMau");
        XLSX.writeFile(workbook, fileName);
    }
    
    function importFromExcel(event, tableElement) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                const commentData = jsonData.slice(1);
                const tableContentSpans = tableElement.querySelectorAll('tbody .content');
                if (commentData.length !== tableContentSpans.length) {
                    alert(`Lỗi: Tệp Excel có ${commentData.length} dòng dữ liệu, nhưng bảng mẫu cần ${tableContentSpans.length} dòng.`);
                    return;
                }
                let updatedCount = 0;
                tableContentSpans.forEach((span, index) => {
                    const dataRow = commentData[index];
                    if (dataRow && dataRow.length >= 2) {
                        const newContent = dataRow[1] ? String(dataRow[1]).trim() : "";
                        span.textContent = newContent;
                        span.setAttribute('data-default', newContent);
                        updatedCount++;
                    }
                });
                alert(`Đã cập nhật thành công ${updatedCount} nhận xét!`);
            } catch (error) {
                console.error("Lỗi khi đọc file Excel:", error);
                alert("Đã xảy ra lỗi khi đọc file. Vui lòng đảm bảo file có đúng định dạng.");
            } finally {
                event.target.value = '';
            }
        };
        reader.readAsArrayBuffer(file);
    }

    function exportNlpcToExcel(tableElement, fileName) {
        const rows = tableElement.querySelectorAll('tbody tr');
        const dataForExport = [["Năng lực, phẩm chất", "Mức độ", "Biểu hiện cụ thể"]];
        let currentSubCat = '';
    
        rows.forEach(row => {
            if (row.cells[0].classList.contains('main-category')) {
                dataForExport.push([row.cells[0].textContent.trim(), '', '']);
                currentSubCat = ''; // Reset sub-category
                return;
            }
            
            const subCatCell = row.querySelector('.sub-category');
            let subCatToShow = '';
            if (subCatCell) {
                currentSubCat = subCatCell.textContent.trim();
                subCatToShow = currentSubCat;
            }
    
            const hasSubCatCell = row.cells[0].classList.contains('sub-category');
            const levelCell = hasSubCatCell ? row.cells[1] : row.cells[0];
            const contentCell = hasSubCatCell ? row.cells[2] : row.cells[1];
            
            const level = levelCell.textContent.trim();
            const contentSpan = contentCell.querySelector('.content');
            const comment = contentSpan ? contentSpan.textContent.trim() : '';
    
            dataForExport.push([subCatToShow, level, comment]);
        });
    
        const worksheet = XLSX.utils.aoa_to_sheet(dataForExport);
        worksheet['!cols'] = [{ wch: 30 }, { wch: 15 }, { wch: 80 }];
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "NhanXetMau");
        XLSX.writeFile(workbook, fileName);
    }
    
    function importNlpcFromExcel(event, tableElement) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    
                const commentData = jsonData.slice(1).filter(row => row[1] && row[2]); // Lọc các hàng có nhận xét
    
                const tableContentSpans = tableElement.querySelectorAll('tbody .content');
    
                if (commentData.length !== tableContentSpans.length) {
                    alert(`Lỗi: Tệp Excel có ${commentData.length} dòng nhận xét, nhưng bảng mẫu cần ${tableContentSpans.length} dòng.`);
                    return;
                }
    
                let updatedCount = 0;
                tableContentSpans.forEach((span, index) => {
                    const dataRow = commentData[index];
                    if (dataRow && dataRow.length >= 3) { 
                        const newContent = String(dataRow[2] || '').trim();
                        span.textContent = newContent;
                        span.setAttribute('data-default', newContent);
                        updatedCount++;
                    }
                });
                alert(`Đã cập nhật thành công ${updatedCount} nhận xét!`);
            } catch (error) {
                console.error("Lỗi khi đọc file Excel:", error);
                alert("Đã xảy ra lỗi khi đọc file. Vui lòng đảm bảo file có đúng định dạng.");
            } finally {
                event.target.value = ''; 
            }
        };
        reader.readAsArrayBuffer(file);
    }
    
    function buildNlpcCommentLookup() {
        const lookup = {};
        const rows = document.querySelectorAll('#bang-mau-nx-nlpc tbody tr');
        let currentSubCat = '';
    
        rows.forEach(row => {
            // Bỏ qua hàng tiêu đề chính
            if (row.cells.length === 1 && row.cells[0].classList.contains('main-category')) {
                return;
            }
    
            // Nếu ô đầu tiên là một danh mục con, đó là một nhóm mới
            if (row.cells[0].classList.contains('sub-category')) {
                currentSubCat = row.cells[0].textContent.trim();
            }
    
            if (!currentSubCat) return;
    
            if (!lookup[currentSubCat]) {
                lookup[currentSubCat] = { T: [], H: [], C: [] };
            }
    
            const hasSubCatCell = row.cells[0].classList.contains('sub-category');
            const levelCell = hasSubCatCell ? row.cells[1] : row.cells[0];
            const contentCell = hasSubCatCell ? row.cells[2] : row.cells[1];
    
            const levelText = levelCell.textContent.trim();
            const contentSpan = contentCell.querySelector('.content');
            const comment = contentSpan ? contentSpan.textContent.trim() : '';
    
            if (levelText === 'Tốt') {
                lookup[currentSubCat]['T'].push(comment);
            } else if (levelText === 'Đạt') {
                lookup[currentSubCat]['H'].push(comment);
            } else if (levelText.includes('Chưa đạt')) {
                lookup[currentSubCat]['C'].push(comment);
            }
        });
    
        // Tạo bí danh để tương thích
        for (const cat in lookup) {
            lookup[cat]['Đ'] = lookup[cat]['H'];
        }
        if(lookup['Giải quyết vấn đề và sáng tạo']) {
             lookup['GQVĐ và sáng tạo'] = lookup['Giải quyết vấn đề và sáng tạo'];
        }
    
        return lookup;
    }

    // --- KHU VỰC GẮN KẾT SỰ KIỆN ---

    hideAllSubjectContent();

    // Menu
    if (lop1Link) {
        lop1Link.addEventListener('click', (e) => {
            e.preventDefault();
            submenu.classList.toggle('show');
            lop1Link.classList.toggle('active');
        });
    }
    document.addEventListener('click', (e) => {
        if (lop1Link && !lop1Link.contains(e.target) && !submenu.contains(e.target)) {
            submenu.classList.remove('show');
            lop1Link.classList.remove('active');
        }
    });

    // --- START: UPDATED CODE ---
    // Các mục trong Menu con
    submenuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const subject = this.textContent.trim();
            hideAllSubjectContent();

            // Ánh xạ tên môn học tới các phần tử nội dung tương ứng
            const contentMap = {
                'Môn TV': [tvContent, tvSample],
                'Môn Toán': [toanContent, toanSample],
                'Môn TNXH': [tnxhContent, tnxhSample],
                'HDTN': [hdtnContent, hdtnSample],
                'Môn Đạo đức': [daoducContent, daoducSample],
                'Âm Nhạc': [amnhacContent, amnhacSample],
                'Mĩ Thuật': [mithuatContent, mithuatSample],
                'GDTC': [gdtcContent, gdtcSample],
                'NL-PC': [nlpcContent],
                'Mẫu NX': [mauNxContent]
            };

            const elementsToShow = contentMap[subject];

            if (elementsToShow) {
                elementsToShow.forEach(el => {
                    if (el) {
                        el.style.display = 'block'; // Hiển thị container chính

                        // Hiển thị tất cả các bảng và nút con trực tiếp
                        Array.from(el.children).forEach(child => {
                            if (child.tagName === 'TABLE') {
                                child.style.display = 'table';
                            }
                            if (child.tagName === 'BUTTON' && child.classList.contains('action-button')) {
                                child.style.display = 'inline-block';
                            }
                        });

                        // Xử lý riêng cho container .table-actions
                        const tableActions = el.querySelector('.table-actions');
                        if (tableActions) {
                            tableActions.style.display = 'flex';
                            // Và cũng hiển thị các nút bên trong nó
                            tableActions.querySelectorAll('.action-button').forEach(button => {
                                button.style.display = 'inline-block';
                            });
                        }
                    }
                });
            }

            if (submenu) submenu.classList.remove('show');
        });
    });
    // --- END: UPDATED CODE ---


    // Các nút Sửa và Reset
    document.querySelectorAll('.edit-btn').forEach(editButton => {
        editButton.addEventListener('click', function() {
            const td = this.parentElement;
            const contentSpan = td.querySelector('.content');
            if (!contentSpan || td.querySelector('input[type="text"]')) return;
            contentSpan.style.display = 'none';
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.value = contentSpan.textContent.trim();
            inputField.style.width = '80%';
            td.insertBefore(inputField, contentSpan);
            inputField.focus();
            let saveButton = td.querySelector('.custom-save-btn');
            if (!saveButton) {
                saveButton = document.createElement('button');
                saveButton.textContent = 'Lưu';
                saveButton.classList.add('custom-save-btn');
                saveButton.style.marginLeft = '10px';
                td.appendChild(saveButton);
            }
            this.disabled = true;
            saveButton.addEventListener('click', function saveHandler() {
                contentSpan.textContent = inputField.value;
                inputField.remove();
                saveButton.remove();
                contentSpan.style.display = '';
                editButton.disabled = false;
                this.removeEventListener('click', saveHandler);
            });
        });
    });
    document.querySelectorAll('.reset-btn').forEach(button => {
        button.addEventListener('click', function() {
            const td = this.closest('td');
            const contentSpan = td ? td.querySelector('.content') : null;
            if (!contentSpan) return;
            contentSpan.textContent = contentSpan.getAttribute('data-default');
            const inputField = td.querySelector('input[type="text"]');
            if (inputField) inputField.remove();
            const saveButton = td.querySelector('.custom-save-btn');
            if (saveButton) saveButton.remove();
            contentSpan.style.display = '';
            const editButton = td.querySelector('.edit-btn');
            if (editButton) editButton.disabled = false;
        });
    });

    // Sự kiện Dán và Sao chép
    if (bangMonTV) bangMonTV.addEventListener('paste', (e) => handlePasteData(e, bangMonTV));
    if (bangMonToan) bangMonToan.addEventListener('paste', (e) => handlePasteData(e, bangMonToan));
    if (bangMonTNXH) bangMonTNXH.addEventListener('paste', (e) => handlePasteData(e, bangMonTNXH));
    if (bangMonHDTN) bangMonHDTN.addEventListener('paste', (e) => handlePasteData(e, bangMonHDTN));
    if (bangMonDaoDuc) bangMonDaoDuc.addEventListener('paste', (e) => handlePasteData(e, bangMonDaoDuc));
    if (bangMonAmNhac) bangMonAmNhac.addEventListener('paste', (e) => handlePasteData(e, bangMonAmNhac));
    if (bangMonMiThuat) bangMonMiThuat.addEventListener('paste', (e) => handlePasteData(e, bangMonMiThuat));
    if (bangMonGDTC) bangMonGDTC.addEventListener('paste', (e) => handlePasteData(e, bangMonGDTC));
    if (bangMonNLPC) bangMonNLPC.addEventListener('paste', (e) => handlePasteData(e, bangMonNLPC));

    if (copyBangDiemBtnTV) copyBangDiemBtnTV.addEventListener('click', () => copySubjectTableData(bangMonTV));
    if (copyBangDiemBtnToan) copyBangDiemBtnToan.addEventListener('click', () => copySubjectTableData(bangMonToan));
    if (copyBangDiemBtnTNXH) copyBangDiemBtnTNXH.addEventListener('click', () => copySubjectTableData(bangMonTNXH));
    if (copyBangDiemBtnHDTN) copyBangDiemBtnHDTN.addEventListener('click', () => copySubjectTableData(bangMonHDTN));
    if (copyBangDiemBtnDaoDuc) copyBangDiemBtnDaoDuc.addEventListener('click', () => copySubjectTableData(bangMonDaoDuc));
    if (copyBangDiemBtnAmNhac) copyBangDiemBtnAmNhac.addEventListener('click', () => copySubjectTableData(bangMonAmNhac));
    if (copyBangDiemBtnMiThuat) copyBangDiemBtnMiThuat.addEventListener('click', () => copySubjectTableData(bangMonMiThuat));
    if (copyBangDiemBtnGDTC) copyBangDiemBtnGDTC.addEventListener('click', () => copySubjectTableData(bangMonGDTC));
    if (copyBangDiemBtnNLPC) copyBangDiemBtnNLPC.addEventListener('click', () => copyAndCombineNlpcData(bangMonNLPC));
    
    // --- KHU VỰC NHẬP NHẬN XÉT ---
    if (nhapNhanXetBtnTV) {
        nhapNhanXetBtnTV.addEventListener('click', () => {
            updateXLColumn(bangMonTV);
            const body = bangMonTV.querySelector('tbody');
            if (!body) return;

            // Xây dựng bảng tra cứu nhận xét có cấu trúc
            const tvCommentLookup = buildTvCommentLookup(bangMauNhanXetTV);

            body.querySelectorAll('tr').forEach(row => {
                const cells = row.querySelectorAll('td');
                if (cells.length > 5) { // Đảm bảo hàng có đủ ô
                    const diemKT = cells[4].textContent.trim();
                    const finalComments = [];

                    // Lấy một nhận xét ngẫu nhiên cho mỗi hạng mục tại điểm số đã cho
                    const categories = ['ĐỌC', 'VIẾT', 'NGHE VÀ NÓI'];
                    categories.forEach(category => {
                        if (tvCommentLookup[category] && tvCommentLookup[category][diemKT] && tvCommentLookup[category][diemKT].length > 0) {
                            const commentsForScore = tvCommentLookup[category][diemKT];
                            const randomComment = commentsForScore[Math.floor(Math.random() * commentsForScore.length)];
                            // Dọn dẹp nhận xét (xóa dấu chấm cuối) trước khi nối
                            finalComments.push(randomComment.replace(/\.$/, ''));
                        }
                    });
                    
                    if (finalComments.length > 0) {
                        // Nối các nhận xét và thêm dấu chấm cuối cùng.
                        cells[3].textContent = finalComments.join('. ') + '.';
                    } else {
                        cells[3].textContent = ''; // Không tìm thấy nhận xét cho điểm này
                    }
                }
            });
            alert('Đã cập nhật nhận xét môn Tiếng Việt!');
        });
    }

    if (nhapNhanXetBtnToan) {
        nhapNhanXetBtnToan.addEventListener('click', () => {
            updateXLColumn(bangMonToan);
            const body = bangMonToan.querySelector('tbody');
            if (!body) return;
            commentLookup = buildCommentLookup(bangMauNhanXetToan);
            body.querySelectorAll('tr').forEach(row => {
                const cells = row.querySelectorAll('td');
                if (cells.length >= 6 && cells[3].textContent.trim() === "") {
                    const scoreText = cells[4].textContent.trim();
                    const scoreValue = parseFloat(scoreText);
                    let possibleComments = (!isNaN(scoreValue) && scoreValue < 5) ? (commentLookup["DƯỚI 5"] || []) : (commentLookup[scoreText] || []);
                    if (possibleComments.length > 0) {
                        cells[3].textContent = possibleComments[Math.floor(Math.random() * possibleComments.length)];
                    }
                }
            });
        });
    }

    function generateClassificationComment(nhanXetBtn, bangDiem, bangMau) {
        if (nhanXetBtn) {
            nhanXetBtn.addEventListener('click', () => {
                const body = bangDiem.querySelector('tbody');
                if (!body) return;
                commentLookup = buildCommentLookup(bangMau);
                body.querySelectorAll('tr').forEach(row => {
                    const cells = row.querySelectorAll('td');
                    if (cells.length === 5 && cells[3].textContent.trim() === "") {
                        const classification = cells[4].textContent.trim().toUpperCase();
                        const possibleComments = commentLookup[classification] || [];
                        if (possibleComments.length > 0) {
                            cells[3].textContent = possibleComments[Math.floor(Math.random() * possibleComments.length)];
                        }
                    }
                });
            });
        }
    }
    generateClassificationComment(nhapNhanXetBtnTNXH, bangMonTNXH, bangMauNhanXetTNXH);
    generateClassificationComment(nhapNhanXetBtnHDTN, bangMonHDTN, bangMauNhanXetHDTN);
    generateClassificationComment(nhapNhanXetBtnDaoDuc, bangMonDaoDuc, bangMauNhanXetDaoDuc);
    generateClassificationComment(nhapNhanXetBtnAmNhac, bangMonAmNhac, bangMauNhanXetAmNhac);
    generateClassificationComment(nhapNhanXetBtnMiThuat, bangMonMiThuat, bangMauNhanXetMiThuat);
    generateClassificationComment(nhapNhanXetBtnGDTC, bangMonGDTC, bangMauNhanXetGDTC);

    if (nhapNlpcBtn) {
        nhapNlpcBtn.addEventListener('click', () => {
            const nlpcCommentLookup = buildNlpcCommentLookup();
            const dataRows = bangMonNLPC.querySelectorAll('tbody tr');
    
            dataRows.forEach(row => {
                const cells = row.cells;
                for (let i = 4; i < cells.length; i++) {
                    const cell = cells[i];
                    const grade = cell.textContent.trim().toUpperCase();
                    const category = NLPC_CATEGORIES[i - 4];
                    
                    if (category && nlpcCommentLookup[category] && nlpcCommentLookup[category][grade] && nlpcCommentLookup[category][grade].length > 0) {
                        const comments = nlpcCommentLookup[category][grade];
                        cell.textContent = comments[Math.floor(Math.random() * comments.length)];
                    }
                }
            });
            alert('Đã cập nhật nhận xét NL-PC từ mẫu!');
        });
    }

    // --- KHU VỰC SỰ KIỆN XUẤT/NHẬP EXCEL ---
    if (exportTvMauBtn) exportTvMauBtn.addEventListener('click', () => exportToExcel(bangMauNhanXetTV, 'mau-nhan-xet-mon-tv.xlsx'));
    if (importTvMauBtn) importTvMauBtn.addEventListener('click', () => importTvMauInput.click());
    if (importTvMauInput) importTvMauInput.addEventListener('change', (e) => importFromExcel(e, bangMauNhanXetTV));

    if (exportToanMauBtn) exportToanMauBtn.addEventListener('click', () => exportToExcel(bangMauNhanXetToan, 'mau-nhan-xet-mon-toan.xlsx'));
    if (importToanMauBtn) importToanMauBtn.addEventListener('click', () => importToanMauInput.click());
    if (importToanMauInput) importToanMauInput.addEventListener('change', (e) => importFromExcel(e, bangMauNhanXetToan));

    if (exportTnxhMauBtn) exportTnxhMauBtn.addEventListener('click', () => exportToExcel(bangMauNhanXetTNXH, 'mau-nhan-xet-mon-tnxh.xlsx'));
    if (importTnxhMauBtn) importTnxhMauBtn.addEventListener('click', () => importTnxhMauInput.click());
    if (importTnxhMauInput) importTnxhMauInput.addEventListener('change', (e) => importFromExcel(e, bangMauNhanXetTNXH));

    if (exportHdtnMauBtn) exportHdtnMauBtn.addEventListener('click', () => exportToExcel(bangMauNhanXetHDTN, 'mau-nhan-xet-mon-hdtn.xlsx'));
    if (importHdtnMauBtn) importHdtnMauBtn.addEventListener('click', () => importHdtnMauInput.click());
    if (importHdtnMauInput) importHdtnMauInput.addEventListener('change', (e) => importFromExcel(e, bangMauNhanXetHDTN));
    
    if (exportDaoDucMauBtn) exportDaoDucMauBtn.addEventListener('click', () => exportToExcel(bangMauNhanXetDaoDuc, 'mau-nhan-xet-mon-daoduc.xlsx'));
    if (importDaoDucMauBtn) importDaoDucMauBtn.addEventListener('click', () => importDaoDucMauInput.click());
    if (importDaoDucMauInput) importDaoDucMauInput.addEventListener('change', (e) => importFromExcel(e, bangMauNhanXetDaoDuc));

    if (exportAmNhacMauBtn) exportAmNhacMauBtn.addEventListener('click', () => exportToExcel(bangMauNhanXetAmNhac, 'mau-nhan-xet-mon-amnhac.xlsx'));
    if (importAmNhacMauBtn) importAmNhacMauBtn.addEventListener('click', () => importAmNhacMauInput.click());
    if (importAmNhacMauInput) importAmNhacMauInput.addEventListener('change', (e) => importFromExcel(e, bangMauNhanXetAmNhac));

    if (exportMiThuatMauBtn) exportMiThuatMauBtn.addEventListener('click', () => exportToExcel(bangMauNhanXetMiThuat, 'mau-nhan-xet-mon-mithuat.xlsx'));
    if (importMiThuatMauBtn) importMiThuatMauBtn.addEventListener('click', () => importMiThuatMauInput.click());
    if (importMiThuatMauInput) importMiThuatMauInput.addEventListener('change', (e) => importFromExcel(e, bangMauNhanXetMiThuat));

    if (exportGdtcMauBtn) exportGdtcMauBtn.addEventListener('click', () => exportToExcel(bangMauNhanXetGDTC, 'mau-nhan-xet-mon-gdtc.xlsx'));
    if (importGdtcMauBtn) importGdtcMauBtn.addEventListener('click', () => importGdtcMauInput.click());
    if (importGdtcMauInput) importGdtcMauInput.addEventListener('change', (e) => importFromExcel(e, bangMauNhanXetGDTC));
    
    if (exportMauNxBtn) exportMauNxBtn.addEventListener('click', () => exportNlpcToExcel(bangMauNxNlpc, 'mau-nhan-xet-nlpc.xlsx'));
    if (importMauNxBtn) importMauNxBtn.addEventListener('click', () => importMauNxInput.click());
    if (importMauNxInput) importMauNxInput.addEventListener('change', (e) => importNlpcFromExcel(e, bangMauNxNlpc));
});
